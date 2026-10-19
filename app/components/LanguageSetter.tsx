'use client';

import { useEffect } from 'react';

export function LanguageSetter({ language }: { language: 'de' | 'en' }) {
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return null;
}
