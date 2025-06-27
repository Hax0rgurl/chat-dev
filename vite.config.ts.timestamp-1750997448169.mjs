// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { crx } from "file:///home/project/node_modules/@crxjs/vite-plugin/dist/index.mjs";
import tsconfigPaths from "file:///home/project/node_modules/vite-tsconfig-paths/dist/index.mjs";

// manifest.config.ts
import { defineManifest } from "file:///home/project/node_modules/@crxjs/vite-plugin/dist/index.mjs";
var manifest_config_default = defineManifest(async (env) => {
  return {
    manifest_version: 3,
    name: "__MSG_appName__",
    description: "__MSG_appDesc__",
    default_locale: "en",
    version: "1.5.1",
    icons: {
      "16": "src/assets/icon.png",
      "32": "src/assets/icon.png",
      "48": "src/assets/icon.png",
      "128": "src/assets/icon.png"
    },
    background: {
      service_worker: "src/background/index.ts",
      type: "module"
    },
    action: {},
    host_permissions: [
      "https://*.bing.com/",
      "https://*.openai.com/",
      "https://*.xfyun.cn/",
      "https://*.llama2.ai/",
      "https://*.plausible.io/",
      "https://gemini.google.com/",
      "https://*.toscl.com/",
      "https://*.aliyun.com/",
      "https://*.pi.ai/",
      "https://*.anthropic.com/",
      "https://*.claude.ai/",
      "https://*.lmsys.org/"
    ],
    "content_security_policy": {
      "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
    },
    optional_host_permissions: ["https://*/*", "wss://*/*"],
    permissions: ["storage", "unlimitedStorage", "sidePanel", "declarativeNetRequestWithHostAccess"],
    content_scripts: [
      {
        matches: ["https://chat.openai.com/*"],
        js: ["src/content-script/chatgpt-inpage-proxy.ts"]
      },
      {
        "matches": ["https://*.toscl.com/*"],
        "js": ["src/content-script/chatdev-inpage.tsx"]
      }
    ],
    commands: {
      "open-app": {
        suggested_key: {
          default: "Alt+L",
          windows: "Alt+L",
          linux: "Alt+L",
          mac: "Command+L"
        },
        description: "Open ChatDev app"
      }
    },
    side_panel: {
      default_path: "sidepanel.html"
    },
    declarative_net_request: {
      rule_resources: [
        {
          id: "ruleset_chatgpt",
          enabled: true,
          path: "src/rules/chatgpt.json"
        },
        {
          id: "ruleset_lmsys",
          enabled: true,
          path: "src/rules/lmsys.json"
        },
        {
          id: "ruleset_bing",
          enabled: true,
          path: "src/rules/bing.json"
        },
        {
          id: "ruleset_ddg",
          enabled: true,
          path: "src/rules/ddg.json"
        },
        {
          id: "ruleset_qianwen",
          enabled: true,
          path: "src/rules/qianwen.json"
        },
        {
          id: "ruleset_baichuan",
          enabled: true,
          path: "src/rules/baichuan.json"
        }
      ]
    }
  };
});

// vite.config.ts
import { viteStaticCopy } from "file:///home/project/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig(({ command, mode }) => {
  return {
    plugins: [
      tsconfigPaths(),
      react(),
      crx({ manifest: manifest_config_default }),
      viteStaticCopy({
        targets: [
          { src: "src/assets/ex_assets/*", dest: "./assets/" }
        ]
      })
    ],
    build: {
      rollupOptions: {
        input: ["app.html"]
      }
    },
    esbuild: {
      drop: mode === "production" ? ["console", "debugger"] : []
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAibWFuaWZlc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcHJvamVjdC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQge2NyeH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJ1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcbmltcG9ydCBtYW5pZmVzdCBmcm9tICcuL21hbmlmZXN0LmNvbmZpZydcbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSAndml0ZS1wbHVnaW4tc3RhdGljLWNvcHknXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCwgbW9kZSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgdHNjb25maWdQYXRocygpLFxuICAgICAgcmVhY3QoKSxcbiAgICAgIGNyeCh7bWFuaWZlc3R9KSxcbiAgICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgICAgdGFyZ2V0czogW1xuICAgICAgICAgIHtzcmM6ICdzcmMvYXNzZXRzL2V4X2Fzc2V0cy8qJywgZGVzdDogJy4vYXNzZXRzLyd9XG4gICAgICAgIF0sXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiBbJ2FwcC5odG1sJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZXNidWlsZDoge1xuICAgICAgZHJvcDogbW9kZSA9PT0gJ3Byb2R1Y3Rpb24nID8gWydjb25zb2xlJywgJ2RlYnVnZ2VyJ10gOiBbXSxcbiAgICB9LFxuICB9XG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L21hbmlmZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0L21hbmlmZXN0LmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZU1hbmlmZXN0IH0gZnJvbSAnQGNyeGpzL3ZpdGUtcGx1Z2luJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVNYW5pZmVzdChhc3luYyAoZW52KSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWFuaWZlc3RfdmVyc2lvbjogMyxcbiAgICBuYW1lOiAnX19NU0dfYXBwTmFtZV9fJyxcbiAgICBkZXNjcmlwdGlvbjogJ19fTVNHX2FwcERlc2NfXycsXG4gICAgZGVmYXVsdF9sb2NhbGU6ICdlbicsXG4gICAgdmVyc2lvbjogJzEuNS4xJyxcbiAgICBpY29uczoge1xuICAgICAgJzE2JzogJ3NyYy9hc3NldHMvaWNvbi5wbmcnLFxuICAgICAgJzMyJzogJ3NyYy9hc3NldHMvaWNvbi5wbmcnLFxuICAgICAgJzQ4JzogJ3NyYy9hc3NldHMvaWNvbi5wbmcnLFxuICAgICAgJzEyOCc6ICdzcmMvYXNzZXRzL2ljb24ucG5nJyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIHNlcnZpY2Vfd29ya2VyOiAnc3JjL2JhY2tncm91bmQvaW5kZXgudHMnLFxuICAgICAgdHlwZTogJ21vZHVsZScsXG4gICAgfSxcbiAgICBhY3Rpb246IHt9LFxuICAgIGhvc3RfcGVybWlzc2lvbnM6IFtcbiAgICAgICdodHRwczovLyouYmluZy5jb20vJyxcbiAgICAgICdodHRwczovLyoub3BlbmFpLmNvbS8nLFxuICAgICAgJ2h0dHBzOi8vKi54Znl1bi5jbi8nLFxuICAgICAgJ2h0dHBzOi8vKi5sbGFtYTIuYWkvJyxcbiAgICAgICdodHRwczovLyoucGxhdXNpYmxlLmlvLycsXG4gICAgICAnaHR0cHM6Ly9nZW1pbmkuZ29vZ2xlLmNvbS8nLFxuICAgICAgJ2h0dHBzOi8vKi50b3NjbC5jb20vJyxcbiAgICAgICdodHRwczovLyouYWxpeXVuLmNvbS8nLFxuICAgICAgJ2h0dHBzOi8vKi5waS5haS8nLFxuICAgICAgJ2h0dHBzOi8vKi5hbnRocm9waWMuY29tLycsXG4gICAgICAnaHR0cHM6Ly8qLmNsYXVkZS5haS8nLFxuICAgICAgJ2h0dHBzOi8vKi5sbXN5cy5vcmcvJyxcbiAgICBdLFxuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJleHRlbnNpb25fcGFnZXNcIjogXCJzY3JpcHQtc3JjICdzZWxmJyAnd2FzbS11bnNhZmUtZXZhbCc7IG9iamVjdC1zcmMgJ3NlbGYnXCJcbiAgICB9LFxuICAgIG9wdGlvbmFsX2hvc3RfcGVybWlzc2lvbnM6IFsnaHR0cHM6Ly8qLyonLCAnd3NzOi8vKi8qJ10sXG4gICAgcGVybWlzc2lvbnM6IFsnc3RvcmFnZScsICd1bmxpbWl0ZWRTdG9yYWdlJywgJ3NpZGVQYW5lbCcsICdkZWNsYXJhdGl2ZU5ldFJlcXVlc3RXaXRoSG9zdEFjY2VzcyddLFxuICAgIGNvbnRlbnRfc2NyaXB0czogW1xuICAgICAge1xuICAgICAgICBtYXRjaGVzOiBbJ2h0dHBzOi8vY2hhdC5vcGVuYWkuY29tLyonXSxcbiAgICAgICAganM6IFsnc3JjL2NvbnRlbnQtc2NyaXB0L2NoYXRncHQtaW5wYWdlLXByb3h5LnRzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGNoZXNcIjogWydodHRwczovLyoudG9zY2wuY29tLyonXSxcbiAgICAgICAgXCJqc1wiOiBbXCJzcmMvY29udGVudC1zY3JpcHQvY2hhdGRldi1pbnBhZ2UudHN4XCJdXG4gICAgICB9XG4gICAgXSxcbiAgICBjb21tYW5kczoge1xuICAgICAgJ29wZW4tYXBwJzoge1xuICAgICAgICBzdWdnZXN0ZWRfa2V5OiB7XG4gICAgICAgICAgZGVmYXVsdDogJ0FsdCtMJyxcbiAgICAgICAgICB3aW5kb3dzOiAnQWx0K0wnLFxuICAgICAgICAgIGxpbnV4OiAnQWx0K0wnLFxuICAgICAgICAgIG1hYzogJ0NvbW1hbmQrTCcsXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnT3BlbiBDaGF0RGV2IGFwcCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2lkZV9wYW5lbDoge1xuICAgICAgZGVmYXVsdF9wYXRoOiAnc2lkZXBhbmVsLmh0bWwnLFxuICAgIH0sXG4gICAgZGVjbGFyYXRpdmVfbmV0X3JlcXVlc3Q6IHtcbiAgICAgIHJ1bGVfcmVzb3VyY2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3J1bGVzZXRfY2hhdGdwdCcsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiAnc3JjL3J1bGVzL2NoYXRncHQuanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3J1bGVzZXRfbG1zeXMnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGF0aDogJ3NyYy9ydWxlcy9sbXN5cy5qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAncnVsZXNldF9iaW5nJyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBhdGg6ICdzcmMvcnVsZXMvYmluZy5qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAncnVsZXNldF9kZGcnLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGF0aDogJ3NyYy9ydWxlcy9kZGcuanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3J1bGVzZXRfcWlhbndlbicsXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBwYXRoOiAnc3JjL3J1bGVzL3FpYW53ZW4uanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3J1bGVzZXRfYmFpY2h1YW4nLFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgcGF0aDogJ3NyYy9ydWxlcy9iYWljaHVhbi5qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUSxvQkFBbUI7QUFDcFAsT0FBTyxXQUFXO0FBQ2xCLFNBQVEsV0FBVTtBQUNsQixPQUFPLG1CQUFtQjs7O0FDSHVNLFNBQVMsc0JBQXNCO0FBRWhRLElBQU8sMEJBQVEsZUFBZSxPQUFPLFFBQVE7QUFDM0MsU0FBTztBQUFBLElBQ0wsa0JBQWtCO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sYUFBYTtBQUFBLElBQ2IsZ0JBQWdCO0FBQUEsSUFDaEIsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLGdCQUFnQjtBQUFBLE1BQ2hCLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRLENBQUM7QUFBQSxJQUNULGtCQUFrQjtBQUFBLE1BQ2hCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSwyQkFBMkI7QUFBQSxNQUN6QixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0EsMkJBQTJCLENBQUMsZUFBZSxXQUFXO0FBQUEsSUFDdEQsYUFBYSxDQUFDLFdBQVcsb0JBQW9CLGFBQWEscUNBQXFDO0FBQUEsSUFDL0YsaUJBQWlCO0FBQUEsTUFDZjtBQUFBLFFBQ0UsU0FBUyxDQUFDLDJCQUEyQjtBQUFBLFFBQ3JDLElBQUksQ0FBQyw0Q0FBNEM7QUFBQSxNQUNuRDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFdBQVcsQ0FBQyx1QkFBdUI7QUFBQSxRQUNuQyxNQUFNLENBQUMsdUNBQXVDO0FBQUEsTUFDaEQ7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVixlQUFlO0FBQUEsVUFDYixTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsYUFBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixjQUFjO0FBQUEsSUFDaEI7QUFBQSxJQUNBLHlCQUF5QjtBQUFBLE1BQ3ZCLGdCQUFnQjtBQUFBLFFBQ2Q7QUFBQSxVQUNFLElBQUk7QUFBQSxVQUNKLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsSUFBSTtBQUFBLFVBQ0osU0FBUztBQUFBLFVBQ1QsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxJQUFJO0FBQUEsVUFDSixTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLElBQUk7QUFBQSxVQUNKLFNBQVM7QUFBQSxVQUNULE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsSUFBSTtBQUFBLFVBQ0osU0FBUztBQUFBLFVBQ1QsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxJQUFJO0FBQUEsVUFDSixTQUFTO0FBQUEsVUFDVCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRDdGRCxTQUFTLHNCQUFzQjtBQUcvQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLFNBQVMsS0FBSyxNQUFNO0FBQ2pELFNBQU87QUFBQSxJQUNMLFNBQVM7QUFBQSxNQUNQLGNBQWM7QUFBQSxNQUNkLE1BQU07QUFBQSxNQUNOLElBQUksRUFBQyxrQ0FBUSxDQUFDO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUCxFQUFDLEtBQUssMEJBQTBCLE1BQU0sWUFBVztBQUFBLFFBQ25EO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsT0FBTyxDQUFDLFVBQVU7QUFBQSxNQUNwQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU0sU0FBUyxlQUFlLENBQUMsV0FBVyxVQUFVLElBQUksQ0FBQztBQUFBLElBQzNEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
