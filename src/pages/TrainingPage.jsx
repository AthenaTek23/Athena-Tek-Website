import { MonitorApp } from '../components/monitors';
import { applicationsViewsConfig, applicationsSiteConfig } from '../config/monitors';

export default function TrainingPage() {
  return (
    <div className="pt-2 bg-dark-950 min-h-screen">
      <div className="container-main py-4">
        <MonitorApp
          viewsConfig={applicationsViewsConfig}
          siteConfig={applicationsSiteConfig}
          theme="applications"
          basePath="/Athena-Tek-Website/monitors/Applications"
        />
      </div>
    </div>
  );
}
