"use strict";(self.webpackChunkcomplan_docs=self.webpackChunkcomplan_docs||[]).push([[6728],{2415:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var s=t(4848),o=t(8453);const a={id:"complan-app-bootstrap-full-sync-sequence",title:"Complan App Bootstrap Full Sync Sequence",sidebar_position:4},c=void 0,i={id:"winpcs3/data sync/complan-app-bootstrap-full-sync-sequence",title:"Complan App Bootstrap Full Sync Sequence",description:"",source:"@site/docs/winpcs3/data sync/complan-sync-sequence.md",sourceDirName:"winpcs3/data sync",slug:"/winpcs3/data sync/complan-app-bootstrap-full-sync-sequence",permalink:"/docs/winpcs3/data sync/complan-app-bootstrap-full-sync-sequence",draft:!1,unlisted:!1,editUrl:"https://github.com/complanusa/winpcs/tree/main/docs/docs/docs/winpcs3/data sync/complan-sync-sequence.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"complan-app-bootstrap-full-sync-sequence",title:"Complan App Bootstrap Full Sync Sequence",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sync-Manager Sync Sequence",permalink:"/docs/winpcs3/data sync/sync-manager-sync-sequence"},next:{title:"withDbGate RA Screen Sync Load and SyncNotificationBar Sequencce",permalink:"/docs/winpcs3/data sync/withdbgate-sequence"}},p={},r=[];function d(e){const n={mermaid:"mermaid",...(0,o.R)(),...e.components};return(0,s.jsx)(n.mermaid,{value:"sequenceDiagram\n    Complan->>CouchDbReplicaProviderAppContext:mount\n    actor User\n    User->>Complan:Login\n    CouchDbReplicaProviderAppContext->>CouchDbReplicaProviderAppContext:onUserAuthenticateEvent()\n    CouchDbReplicaProviderAppContext->>syncSystemRepositoriesAndData:invoke()\n    syncSystemRepositoriesAndData--\x3e>SymtRepository:startSync();\n    syncSystemRepositoriesAndData->>SymtRepository:waitState(DATA_FETCH);\n    syncSystemRepositoriesAndData--\x3e>coreRepository:startSync();\n    syncSystemRepositoriesAndData->>syncSystemRepositoriesAndData:getAppDbs();\n    syncSystemRepositoriesAndData->>SymtRepository:readSymtDbs();\n    loop\n        syncSystemRepositoriesAndData->>SyncManager:BulkRepositoriesInit();\n        syncSystemRepositoriesAndData--\x3e>Repository:StartSync();\n    end\n    Repository--\x3e>SyncManager:onDataUpdates();\n    SyncManager--\x3e>CouchDbReplicaProviderAppContext:onAggregatedDataStatsUpdates()"})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var s=t(6540);const o={},a=s.createContext(o);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);