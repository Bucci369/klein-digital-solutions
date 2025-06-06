import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          {/* Hier können allgemeine Metadaten, Favicons etc. hinzugefügt werden */}
          {/* OPTIONAL: Wenn der Chatbot ZWINGEND sehr früh geladen werden muss,
              könntest du ihn hier einfügen. Aber meistens ist es besser am Ende des Body. */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* HIER DEN CHATBOT-CODE EINFÜGEN! */}
          {/* ERSETZE DIESEN PLATZHALTER MIT DEINEM AKTUELLEN CHATBOT-CODE-SNIPPET */}
          <script type="text/javascript" dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                      window.ChatbotWidget.init({
                          widgetId: 'DEINE_WIDGET_ID_HIER', // ERSETZE DIES!
                          domain: 'deine-domain.com' // ERSETZE DIES!
                      });
                  };
                  v.src = "https://cdn.chatbot-provider.com/widget.js"; // ERSETZE DIES!
                  s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `
          }} />
          {/* ENDE DES CHATBOT-CODES */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;