import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Update selected language when i18n language changes
  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const SUPPORTED_LANGS = ['hi', 'bn', 'mr', 'te', 'ta', 'gu', 'kn', 'ml', 'pa'];

  const changeLanguage = (lng: string) => {
    setSelectedLanguage(lng);
    
    // Calculate new path based on sub-path routing
    let newPath = pathname;
    const pathParts = pathname.split('/');
    const firstSegment = pathParts[1];

    if (SUPPORTED_LANGS.includes(firstSegment)) {
        // Current path is already localized (e.g., /hi/about)
        if (lng === 'en') {
            // Switch to English: remove the locale segment
            newPath = '/' + pathParts.slice(2).join('/');
        } else {
            // Switch to another locale: replace the locale segment
            pathParts[1] = lng;
            newPath = pathParts.join('/');
        }
    } else {
        // Current path is English (root)
        if (lng !== 'en') {
            // Switch to another locale: add the locale segment
            newPath = `/${lng}${pathname === '/' ? '' : pathname}`;
        }
    }

    // Persist language in cookie for server-side rendering
    document.cookie = `i18nextLng=${lng};path=/;max-age=31536000`; // 1 year
    
    // Navigate to the new path
    router.push(newPath || '/');
    
    // Trigger i18n change (for client-side components)
    i18n.changeLanguage(lng);
  };

  if (!mounted) return null;

  return (
    <Select onValueChange={changeLanguage} value={selectedLanguage}>
      <SelectTrigger className="w-[180px]" aria-label={t("select_language")}>
        <Globe className="mr-2 h-4 w-4" />
        <SelectValue placeholder={t("select_language")} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;