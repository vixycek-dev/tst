// Small script to toggle mobile nav
function initLangAndNav(){
  const toggle=document.getElementById('navToggle');
  const nav=document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      if(nav.style.display==='flex'){
        nav.style.display='none';
      } else {
        nav.style.display='flex';
        nav.style.flexDirection='column';
      }
    });
  }
  // Language dropdown, animations, and translations
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');

  const translations = {
    en: {
      nav_home: 'Home',
      nav_contact: 'Contact',
      hero_h2: 'Simple, static website',
      hero_p: 'A minimal, website-only project scaffold ready to customize.',
      cta: 'See offers',
      offers_page_h2: 'Our Offers',
      offers_page_p: 'Here are the offers. Click any to learn more.',
      offers_0_title: 'Fast',
      offers_0_text: 'Lightweight static HTML/CSS/JS that loads instantly.',
      offers_1_title: 'Portable',
      offers_1_text: 'Open directly in a browser or serve with any static host.',
      offers_2_title: 'Customizable',
      offers_2_text: 'Easy to extend with new pages, assets, or frameworks.',
      contact_h3: 'Contact',
      contact_email: 'Email: hello@example.com',
      footer: '© 2026 Website Created by Alvera Services. All rights reserved.',
      logo: 'Website Only',
      // Alvera Vibrance (English)
      alvera_title: 'Alvera Vibrance',
      alvera_tag: 'ENGINE',
      alvera_tag_inline: 'ENGINE',
      alvera_general_title: 'General Information:',
      alvera_general_text: 'Alvera Vibrance is our lightweight visual engine — boost colors, brightness and clarity in any game. Clean overlay UI with presets, profiles, and auto-apply.',
      alvera_features_h4: 'Features:',
      alvera_feat_1: 'Brightness, Contrast, Saturation & Hue control',
      alvera_feat_2: 'Full Bright / Night Vision mode',
      alvera_feat_3: 'Presets: Summer, Winter, Desert, Night Vision & Custom',
      alvera_feat_4: 'Saveable profiles',
      alvera_feat_5: 'Custom Crosshair overlay',
      alvera_feat_6: 'Fully remappable Hotkeys',
      alvera_feat_7: 'Auto Apply & Autostart',
      alvera_pricing_h4: 'Pricing',
      alvera_pricing_label: 'Pricing',
      alvera_price_1_label: '1 Day',
      alvera_price_2_label: '1 Week',
      alvera_price_3_label: '1 Month',
      alvera_price_4_label: '3 Months',
      alvera_price_5_label: 'Lifetime',
      buy: 'buy'
    },
    cz: {
      nav_home: 'Domů',
      nav_contact: 'Kontakt',
      hero_h2: 'Jednoduchý statický web',
      hero_p: 'Minimální statický projekt připravený k úpravám.',
      cta: 'Zobrazit nabídky',
      offers_page_h2: 'Naše nabídky',
      offers_page_p: 'Zde jsou nabídky. Klikněte na jakoukoli pro více informací.',
      offers_0_title: 'Rychlé',
      offers_0_text: 'Lehké statické HTML/CSS/JS, které se načítá okamžitě.',
      offers_1_title: 'Přenosné',
      offers_1_text: 'Otevřete přímo v prohlížeči nebo jej hostujte kdekoli.',
      offers_2_title: 'Přizpůsobitelné',
      offers_2_text: 'Snadné rozšíření o nové stránky, zdroje nebo frameworky.',
      contact_h3: 'Kontakt',
      contact_email: 'E-mail: hello@example.com',
      footer: '© 2026 Website Created by Alvera Services. All rights reserved.',
      logo: 'Pouze web',
      // Alvera Vibrance (Czech)
      alvera_title: 'Alvera Vibrance',
      alvera_tag: 'VIZUÁLNÍ ENGINE',
      alvera_tag_inline: 'VIZUÁLNÍ ENGINE',
      alvera_general_title: 'Obecné informace:',
      alvera_general_text: 'Alvera Vibrance je náš lehký vizuální engine — zvýrazněte barvy, jas a ostrost v jakékoliv hře. Čisté překryvné rozhraní s přednastaveními, profily a automatickým použitím.',
      alvera_features_h4: 'Funkce:',
      alvera_feat_1: 'Ovládání jasu, kontrastu, saturace a odstínu',
      alvera_feat_2: 'Full Bright / Noční vidění režim',
      alvera_feat_3: 'Předvolby: Léto, Zima, Poušť, Noční vidění & Vlastní',
      alvera_feat_4: 'Uložitelné profily',
      alvera_feat_5: 'Vlastní překryvné zaměřovač (Crosshair)',
      alvera_feat_6: 'Plně přemapovatelné klávesové zkratky (Hotkeys)',
      alvera_feat_7: 'Automatické použití & autostart',
      alvera_pricing_h4: 'Ceny',
      alvera_pricing_label: 'Ceny',
      alvera_price_1_label: '1 Den',
      alvera_price_2_label: '1 Týden',
      alvera_price_3_label: '1 Měsíc',
      alvera_price_4_label: '3 Měsíce',
      alvera_price_5_label: 'Doživotně',
      buy: 'koupit'
    },
    es: {
      nav_home: 'Inicio', nav_contact: 'Contacto', hero_h2: 'Sitio web estático simple', hero_p: 'Un proyecto estático mínimo listo para personalizar.', cta: 'Ver ofertas', offers_page_h2: 'Nuestras ofertas', offers_page_p: 'Aquí están las ofertas. Haga clic en cualquiera para saber más.', offers_0_title: 'Rápido', offers_0_text: 'HTML/CSS/JS estático y ligero que carga al instante.', offers_1_title: 'Portátil', offers_1_text: 'Ábrelo en el navegador o publícalo en cualquier host.', offers_2_title: 'Personalizable', offers_2_text: 'Fácil de extender con páginas o recursos.', contact_h3: 'Contacto', contact_email: 'Correo: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'MOTOR VISUAL', alvera_tag_inline: 'MOTOR VISUAL', alvera_general_title: 'Información general:', alvera_general_text: 'Alvera Vibrance es nuestro motor visual ligero — mejora colores, brillo y claridad en cualquier juego. Interfaz superpuesta limpia con presets, perfiles y autoaplicación.', alvera_features_h4: 'Características:', alvera_feat_1: 'Control de brillo, contraste, saturación y matiz', alvera_feat_2: 'Modo Full Bright / Visión nocturna', alvera_feat_3: 'Presets: Verano, Invierno, Desierto, Visión nocturna y Personalizado', alvera_feat_4: 'Perfiles guardables', alvera_feat_5: 'Overlay de mira personalizado', alvera_feat_6: 'Teclas rápidas totalmente reasignables', alvera_feat_7: 'Auto aplicación y autostart', alvera_pricing_h4: 'Precios', alvera_pricing_label: 'Precios', alvera_price_1_label: '1 Día', alvera_price_2_label: '1 Semana', alvera_price_3_label: '1 Mes', alvera_price_4_label: '3 Meses', alvera_price_5_label: 'De por vida', buy: 'comprar'
    },
    fr: {
      nav_home: 'Accueil', nav_contact: 'Contact', hero_h2: 'Site statique simple', hero_p: 'Un projet statique minimal prêt à personnaliser.', cta: 'Voir les offres', offers_page_h2: 'Nos offres', offers_page_p: 'Voici les offres. Cliquez sur l\'une pour en savoir plus.', offers_0_title: 'Rapide', offers_0_text: 'HTML/CSS/JS léger qui se charge immédiatement.', offers_1_title: 'Portable', offers_1_text: 'Ouvrez-le dans un navigateur ou hébergez-le.', offers_2_title: 'Personnalisable', offers_2_text: 'Facile à étendre.', contact_h3: 'Contact', contact_email: 'Email: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'MOTEUR VISUEL', alvera_tag_inline: 'MOTEUR VISUEL', alvera_general_title: 'Informations générales:', alvera_general_text: 'Alvera Vibrance est notre moteur visuel léger — améliore couleurs, luminosité et netteté dans n\'importe quel jeu. Interface superposée propre avec presets, profils et application automatique.', alvera_features_h4: 'Fonctionnalités:', alvera_feat_1: 'Contrôle de la luminosité, du contraste, de la saturation et de la teinte', alvera_feat_2: 'Mode Full Bright / Vision nocturne', alvera_feat_3: 'Presets: Été, Hiver, Désert, Vision nocturne & Personnalisé', alvera_feat_4: 'Profils enregistrables', alvera_feat_5: 'Overlay de viseur personnalisé', alvera_feat_6: 'Raccourcis entièrement remappables', alvera_feat_7: 'Application automatique et démarrage automatique', alvera_pricing_h4: 'Tarifs', alvera_pricing_label: 'Tarifs', alvera_price_1_label: '1 Jour', alvera_price_2_label: '1 Semaine', alvera_price_3_label: '1 Mois', alvera_price_4_label: '3 Mois', alvera_price_5_label: 'À vie', buy: 'acheter'
    },
    de: {
      nav_home: 'Start', nav_contact: 'Kontakt', hero_h2: 'Einfaches statisches Web', hero_p: 'Ein minimales, statisches Projekt zum Anpassen.', cta: 'Angebote ansehen', offers_page_h2: 'Unsere Angebote', offers_page_p: 'Hier sind die Angebote. Klicken Sie auf eines, um mehr zu erfahren.', offers_0_title: 'Schnell', offers_0_text: 'Leichtes statisches HTML/CSS/JS, lädt sofort.', offers_1_title: 'Portabel', offers_1_text: 'Direkt im Browser öffnen oder hosten.', offers_2_title: 'Anpassbar', offers_2_text: 'Einfach erweiterbar.', contact_h3: 'Kontakt', contact_email: 'E-Mail: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'VISUAL ENGINE', alvera_tag_inline: 'VISUAL ENGINE', alvera_general_title: 'Allgemeine Informationen:', alvera_general_text: 'Alvera Vibrance ist unsere leichte visuelle Engine — verbessert Farben, Helligkeit und Klarheit in jedem Spiel. Saubere Overlay-UI mit Presets, Profilen und automatischer Anwendung.', alvera_features_h4: 'Funktionen:', alvera_feat_1: 'Helligkeit, Kontrast, Sättigung & Farbtonsteuerung', alvera_feat_2: 'Full Bright / Nachtsicht-Modus', alvera_feat_3: 'Presets: Sommer, Winter, Wüste, Nachtsicht & Benutzerdefiniert', alvera_feat_4: 'Speicherbare Profile', alvera_feat_5: 'Benutzerdefiniertes Fadenkreuz-Overlay', alvera_feat_6: 'Vollständig neu belegbare Hotkeys', alvera_feat_7: 'Automatische Anwendung & Autostart', alvera_pricing_h4: 'Preise', alvera_pricing_label: 'Preise', alvera_price_1_label: '1 Tag', alvera_price_2_label: '1 Woche', alvera_price_3_label: '1 Monat', alvera_price_4_label: '3 Monate', alvera_price_5_label: 'Lebenszeit', buy: 'kaufen'
    },
    it: {
      nav_home: 'Home', nav_contact: 'Contatto', hero_h2: 'Sito statico semplice', hero_p: 'Progetto statico minimale pronto da personalizzare.', cta: 'Vedi offerte', offers_page_h2: 'Le nostre offerte', offers_page_p: 'Ecco le offerte. Clicca su una per saperne di più.', offers_0_title: 'Veloce', offers_0_text: 'HTML/CSS/JS statico leggero che si carica immediatamente.', offers_1_title: 'Portatile', offers_1_text: 'Apri nel browser o ospita dove vuoi.', offers_2_title: 'Personalizzabile', offers_2_text: 'Facile da estendere.', contact_h3: 'Contatto', contact_email: 'Email: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'MOTORE VISIVO', alvera_tag_inline: 'MOTORE VISIVO', alvera_general_title: 'Informazioni generali:', alvera_general_text: 'Alvera Vibrance è il nostro motore visivo leggero — migliora colori, luminosità e nitidezza in qualsiasi gioco. Interfaccia overlay pulita con preset, profili e applicazione automatica.', alvera_features_h4: 'Funzionalità:', alvera_feat_1: 'Controllo di luminosità, contrasto, saturazione e tonalità', alvera_feat_2: 'Modalità Full Bright / Visione notturna', alvera_feat_3: 'Preset: Estate, Inverno, Deserto, Visione notturna & Personalizzato', alvera_feat_4: 'Profili salvabili', alvera_feat_5: 'Overlay mirino personalizzato', alvera_feat_6: 'Hotkey completamente rimappabili', alvera_feat_7: 'Applicazione automatica e avvio automatico', alvera_pricing_h4: 'Prezzi', alvera_pricing_label: 'Prezzi', alvera_price_1_label: '1 Giorno', alvera_price_2_label: '1 Settimana', alvera_price_3_label: '1 Mese', alvera_price_4_label: '3 Mesi', alvera_price_5_label: 'A vita', buy: 'acquista'
    },
    pt: {
      nav_home: 'Início', nav_contact: 'Contato', hero_h2: 'Site estático simples', hero_p: 'Um projeto estático mínimo pronto para personalizar.', cta: 'Ver ofertas', offers_page_h2: 'Nossas ofertas', offers_page_p: 'Aqui estão as ofertas. Clique em qualquer uma para saber mais.', offers_0_title: 'Rápido', offers_0_text: 'HTML/CSS/JS estático leve que carrega instantaneamente.', offers_1_title: 'Portátil', offers_1_text: 'Abra no navegador ou hospede em qualquer lugar.', offers_2_title: 'Personalizável', offers_2_text: 'Fácil de estender.', contact_h3: 'Contato', contact_email: 'Email: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'MOTOR VISUAL', alvera_tag_inline: 'MOTOR VISUAL', alvera_general_title: 'Informações gerais:', alvera_general_text: 'Alvera Vibrance é o nosso motor visual leve — aumente cores, brilho e clareza em qualquer jogo. Interface de sobreposição limpa com predefinições, perfis e aplicação automática.', alvera_features_h4: 'Recursos:', alvera_feat_1: 'Controle de brilho, contraste, saturação e matiz', alvera_feat_2: 'Modo Full Bright / Visão noturna', alvera_feat_3: 'Predefinições: Verão, Inverno, Deserto, Visão noturna e Personalizado', alvera_feat_4: 'Perfis graváveis', alvera_feat_5: 'Overlay de mira personalizado', alvera_feat_6: 'Teclas de atalho totalmente remapeáveis', alvera_feat_7: 'Aplicação automática e inicialização automática', alvera_pricing_h4: 'Preços', alvera_pricing_label: 'Preços', alvera_price_1_label: '1 Dia', alvera_price_2_label: '1 Semana', alvera_price_3_label: '1 Mês', alvera_price_4_label: '3 Meses', alvera_price_5_label: 'Vitalício', buy: 'comprar'
    },
    ru: {
      nav_home: 'Главная', nav_contact: 'Контакт', hero_h2: 'Простой статический сайт', hero_p: 'Минимальный статический проект, готовый для настройки.', cta: 'Посмотреть предложения', offers_page_h2: 'Наши предложения', offers_page_p: 'Вот наши предложения. Нажмите на любое, чтобы узнать больше.', offers_0_title: 'Быстрый', offers_0_text: 'Лёгкий статический HTML/CSS/JS, который загружается мгновенно.', offers_1_title: 'Портативный', offers_1_text: 'Откройте в браузере или разместите на любом хостинге.', offers_2_title: 'Настраиваемый', offers_2_text: 'Легко расширять.', contact_h3: 'Контакт', contact_email: 'Email: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'ВИЗУАЛЬНЫЙ ДВИГАТЕЛЬ', alvera_tag_inline: 'ВИЗУАЛЬНЫЙ ДВИГАТЕЛЬ', alvera_general_title: 'Общая информация:', alvera_general_text: 'Alvera Vibrance — наш лёгкий визуальный движок — улучшает цвета, яркость и четкость в любой игре. Чистый интерфейс оверлея с пресетами, профилями и авто-применением.', alvera_features_h4: 'Особенности:', alvera_feat_1: 'Управление яркостью, контрастом, насыщенностью и оттенком', alvera_feat_2: 'Режим Full Bright / Ночное видение', alvera_feat_3: 'Пресеты: Лето, Зима, Пустыня, Ночное видение и Пользовательский', alvera_feat_4: 'Сохраняемые профили', alvera_feat_5: 'Пользовательский оверлей прицела', alvera_feat_6: 'Полностью переназначаемые хоткеи', alvera_feat_7: 'Авто-применение и автозапуск', alvera_pricing_h4: 'Цены', alvera_pricing_label: 'Цены', alvera_price_1_label: '1 день', alvera_price_2_label: '1 неделя', alvera_price_3_label: '1 месяц', alvera_price_4_label: '3 месяца', alvera_price_5_label: 'Пожизненно', buy: 'купить'
    },
    zh: {
      nav_home: '首页', nav_contact: '联系', hero_h2: '简单的静态网站', hero_p: '一个可定制的最小静态项目。', cta: '查看优惠', offers_page_h2: '我们的优惠', offers_page_p: '以下是优惠。点击任意一项了解更多。', offers_0_title: '快速', offers_0_text: '轻量的静态 HTML/CSS/JS，瞬间加载。', offers_1_title: '可移植', offers_1_text: '直接在浏览器中打开或托管。', offers_2_title: '可定制', offers_2_text: '易于扩展。', contact_h3: '联系', contact_email: '邮箱: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: '视觉引擎', alvera_tag_inline: '视觉引擎', alvera_general_title: '基本信息:', alvera_general_text: 'Alvera Vibrance 是我们轻量级的视觉引擎——增强任何游戏的色彩、亮度和清晰度。具有预设、配置文件和自动应用的简洁覆盖界面。', alvera_features_h4: '功能:', alvera_feat_1: '亮度、对比度、饱和度和色相控制', alvera_feat_2: '全亮 / 夜视 模式', alvera_feat_3: '预设：夏季、冬季、沙漠、夜视和自定义', alvera_feat_4: '可保存的配置文件', alvera_feat_5: '自定义十字准星覆盖', alvera_feat_6: '完全可重新映射的热键', alvera_feat_7: '自动应用与开机自启', alvera_pricing_h4: '价格', alvera_pricing_label: '价格', alvera_price_1_label: '1天', alvera_price_2_label: '1周', alvera_price_3_label: '1个月', alvera_price_4_label: '3个月', alvera_price_5_label: '终身', buy: '购买'
    },
    ja: {
      nav_home: 'ホーム', nav_contact: 'お問い合わせ', hero_h2: 'シンプルな静的ウェブサイト', hero_p: 'カスタマイズ可能な最小限の静的プロジェクトです。', cta: 'オファーを見る', offers_page_h2: '提供中のオファー', offers_page_p: 'ここにオファーがあります。詳細を見るにはクリックしてください。', offers_0_title: '高速', offers_0_text: '軽量な静的HTML/CSS/JSで即座に読み込まれます。', offers_1_title: 'ポータブル', offers_1_text: 'ブラウザで直接開くか、任意のホストで配信してください。', offers_2_title: 'カスタマイズ可能', offers_2_text: '拡張が簡単です。', contact_h3: 'お問い合わせ', contact_email: 'メール: hello@example.com', footer: '© 2026 Website Only', logo: 'Website Only', alvera_title: 'Alvera Vibrance', alvera_tag: 'ビジュアルエンジン', alvera_tag_inline: 'ビジュアルエンジン', alvera_general_title: '概要:', alvera_general_text: 'Alvera Vibranceは軽量なビジュアルエンジンです。あらゆるゲームで色、明るさ、鮮明さを向上させます。プリセット、プロファイル、自動適用を備えたクリーンなオーバーレイUI。', alvera_features_h4: '機能:', alvera_feat_1: '明るさ、コントラスト、彩度、色相の制御', alvera_feat_2: 'フルブライト / ナイトビジョンモード', alvera_feat_3: 'プリセット: サマー、ウィンター、デザート、ナイトビジョン & カスタム', alvera_feat_4: '保存可能なプロファイル', alvera_feat_5: 'カスタムクロスヘアオーバーレイ', alvera_feat_6: '完全にリマップ可能なホットキー', alvera_feat_7: '自動適用と自動起動', alvera_pricing_h4: '料金', alvera_pricing_label: '料金', alvera_price_1_label: '1日', alvera_price_2_label: '1週間', alvera_price_3_label: '1か月', alvera_price_4_label: '3か月', alvera_price_5_label: '永久', buy: '購入'
    }
  };

  function setLanguage(lang){
    const elems = document.querySelectorAll('[data-i18n]');
    elems.forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(translations[lang] && translations[lang][key]){
        el.textContent = translations[lang][key];
      } else if(translations['en'] && translations['en'][key]){
        // fallback to English if a translation is missing for the selected language
        el.textContent = translations['en'][key];
      }
    });
    try{ localStorage.setItem('site_lang', lang); }catch(e){}
    // highlight selected language in dropdown and update button icon
    const lis = document.querySelectorAll('#langDropdown li[data-lang]');
    lis.forEach(li=>{
      li.classList.toggle('selected', li.getAttribute('data-lang') === lang);
    });
    const sel = document.querySelector('#langDropdown li[data-lang="'+lang+'"]');
    if(sel){
      const flagEl = sel.querySelector('.flag');
      const icon = document.querySelector('.lang-toggle .lang-icon');
      if(icon && flagEl) icon.src = flagEl.src;
      // update accessible label on button
      const labelText = sel.textContent.trim();
      const langToggleBtn = document.getElementById('langToggle');
      if(langToggleBtn) langToggleBtn.setAttribute('aria-label', labelText);
    }
  }

  // dropdown open/close with animation and persistence
  if(langToggle && langDropdown){
    function openDropdown(open){
      if(open){
        langDropdown.classList.add('open');
        langDropdown.setAttribute('aria-hidden','false');
        langToggle.setAttribute('aria-expanded','true');
      } else {
        langDropdown.classList.remove('open');
        langDropdown.setAttribute('aria-hidden','true');
        langToggle.setAttribute('aria-expanded','false');
      }
      try{ localStorage.setItem('lang_dropdown_open', open ? '1' : '0'); }catch(e){}
    }

    langToggle.addEventListener('click',(e)=>{
      e.stopPropagation();
      const isOpen = langDropdown.classList.contains('open');
      openDropdown(!isOpen);
    });

    langDropdown.addEventListener('click',(e)=>{
      e.stopPropagation();
      const li = e.target.closest('li[data-lang]');
      if(!li) return;
      const lang = li.getAttribute('data-lang');
      setLanguage(lang);
      openDropdown(false);
    });

    // close on outside click
    document.addEventListener('click', (e)=>{
      if(!e.target.closest('.lang-container')){
        openDropdown(false);
      }
    });

    // load saved lang
    const savedLang = (function(){try{return localStorage.getItem('site_lang')}catch(e){return null}})();
    if(savedLang && translations[savedLang]) setLanguage(savedLang);
    // restore dropdown open state
    const savedOpen = (function(){try{return localStorage.getItem('lang_dropdown_open')}catch(e){return null}})();
    if(savedOpen === '1') openDropdown(true);
  }
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initLangAndNav);
} else {
  initLangAndNav();
}
