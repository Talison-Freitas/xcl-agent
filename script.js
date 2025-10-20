function initEmbeddedMessaging() {
  try {
    embeddedservice_bootstrap.settings.language = "en_US"; // For example, enter 'en' or 'en-US'

    embeddedservice_bootstrap.init(
      "00DdL00000eY40X",
      "Github_Messaging_Setting",
      "https://orgfarm-f5ca7969d8-dev-ed.develop.my.site.com/ESWGithubMessagingSetti1761002911462",
      {
        scrt2URL:
          "https://orgfarm-f5ca7969d8-dev-ed.develop.my.salesforce-scrt.com",
      },
    );
  } catch (err) {
    console.error("Error loading Embedded Messaging: ", err);
  }
}

