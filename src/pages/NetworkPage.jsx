import { MonitorApp } from '../components/monitors';
import { networkViewsConfig, networkSiteConfig } from '../config/monitors';

export default function NetworkPage() {
  return (
    <div className="pt-2 bg-dark-950 min-h-screen">
      <div className="container-main py-4">
        <MonitorApp
          viewsConfig={networkViewsConfig}
          siteConfig={networkSiteConfig}
          theme="network"
          basePath="/Athena-Tek-Website/monitors/Network"
        />
      </div>
    </div>
  );
}
