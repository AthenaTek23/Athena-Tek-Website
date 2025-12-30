import { MonitorApp } from '../components/monitors';
import { networkViewsConfig, networkSiteConfig } from '../config/monitors';
import { useTheme } from '../contexts/ThemeContext';

export default function NetworkPage() {
  const { isDark, isSepia } = useTheme();
  return (
    <div className={`pt-2 min-h-screen ${isDark ? 'bg-dark-950' : isSepia ? 'bg-[#f5f0e1]' : 'bg-light-100'}`}>
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
