// script.js
(async () => {
    const REF_DOMAIN = 'en.mrproblogger.com/hyperbot';
    const WEBHOOK = 'https://discord.com/api/webhooks/1362871303287341126/BeMdQtB-OCpsTBkMUih3DCGfk7okFBsTBu347QIH2IJ3xQIp5zdq109SjUbxqq2QEn4G';
    const codeEl = document.getElementById('code');
  
    // 1) Gate by actual referrer
    const ref = document.referrer.toLowerCase();
    if (!ref.includes(REF_DOMAIN)) {
      codeEl.innerText = 'Please open via our official short link';
      return;
    }
  
    // 2) Generate a random HL‑#####‑#####
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    function rnd() { return CHARS.charAt(Math.floor(Math.random() * CHARS.length)); }
    function grp(n) { return Array.from({ length: n }, rnd).join(''); }
    const code = `HL-${grp(5)}-${grp(5)}`;
  
    // 3) Display
    codeEl.innerText = code;
  
    // 4) Send once
    try {
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: code })
      });
    } catch (err) {
      console.error('Webhook error:', err);
    }
  })();
  