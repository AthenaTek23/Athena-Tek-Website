import { MonitorApp } from '../components/monitors';
import { tedViewsConfig, tedSiteConfig } from '../config/monitors';

export default function TEDPage() {
  return (
    <div className="pt-2 bg-dark-950 min-h-screen">
      <div className="container-main py-4">
        <MonitorApp
          viewsConfig={tedViewsConfig}
          siteConfig={tedSiteConfig}
          theme="ted"
          basePath="/Athena-Tek-Website/monitors/TED"
        />
      </div>
    </div>
  );
}
