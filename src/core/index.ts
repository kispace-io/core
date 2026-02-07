// 1. Foundation: logging, persistence, settings
import './logger';
import './persistenceservice';
import './settingsservice';

// 2. Registries and task service (contribution first – others depend on it)
import './contributionregistry';
import './packageinfoservice';
import './taskservice';

// 3. i18n and ESM
import './i18n';
import './esmsh-service';

// 4. Command and extension registries
import './commandregistry';
import './extensionregistry';

// 5. UI and workspace services
import './keybindings';
import './dialogservice';
import './editorregistry';
import './filesys';

// 6. App loader and marketplace
import './apploader';
import './marketplaceregistry';

// 7. Language bundles and dialogs (use contributionRegistry / dialogService)
import '../i18n';
import '../dialogs';

// 8. Parts, components, widgets, extensions, contributions, commands
import '../parts';
import '../components';
import '../widgets';
import '../extensions';
import '../contributions';
import '../commands';
