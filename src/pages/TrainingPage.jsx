import { MonitorApp } from '../components/monitors';
import { applicationsViewsConfig, applicationsSiteConfig } from '../config/monitors';
import { useTheme } from '../contexts/ThemeContext';

export default function TrainingPage() {
  const { isDark, isSepia } = useTheme();
  return (
    <div className={`pt-2 min-h-screen ${isDark ? 'bg-dark-950' : isSepia ? 'bg-[#f5f0e1]' : 'bg-light-100'}`}>
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
