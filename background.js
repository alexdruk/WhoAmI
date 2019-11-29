// background.js
let urls = [];
const democratUrls = [
  "https://democrats.org/take-action/",
  "https://www.google.com/search?q=democrats+-republicans&tbm=nws",
  "https://swingleft.org/groups",
  "https://www.democratsabroad.org/news",
  "https://bigeyeview.com/products/democratic-bumper-sticker-vote-blue-no-matter-who",
  "https://www.reddit.com/r/PoliticalDiscussion/comments/67z4k3/what_made_you_a_democrat/",
  "https://www.reddit.com/r/democrats/",
  "https://www.facebook.com/groups/DemocratsAreStrongerTogether/",
  "https://www.facebook.com/electdemocrats/",
  "https://www.facebook.com/democrats/"
];

const republicanUrls = [
  "https://www.google.com/search?q=republicans+-democrats&tbm=nws",
  "https://eagleforum.org/political/most-powerful-office-in-the-world.html",
  "https://www.freerepublic.com/tag/gop-forum/index",
  "https://www.metclubnyc.org/updates/",
  "https://www.theguardian.com/us-news/republicans",
  "https://www.foxnews.com/opinion",
  "https://www.facebook.com/search/top/?q=democrats%20are%20insane&epa=SEARCH_BOX",
  "https://www.facebook.com/yourrepublicannews/",
  "https://www.facebook.com/GOP/",
  "https://www.facebook.com/FansOfDonaldTrump",
  "https://www.facebook.com/DonaldTrump/",
  "https://www.facebook.com/metclubnyc/"
];
const monarchistUrls = [
  "https://www.theguardian.com/global/2019/oct/01/the-rise-of-monarchism",
  "https://www.reddit.com/r/monarchism",
  "https://jhiblog.org/2019/05/30/12181/",
  "http://americanmonarchistsociety.com/",
  "http://radicalroyalist.blogspot.com/",
  "http://themonarchist.blogspot.com/",
  "https://monarchyinternational.net/",
  "http://www.monarquiaeuropea.org/",
  "https://www.facebook.com/AmericanMonarchistSociety/",
  "https://www.facebook.com/Minarcho-Monarchism-104888329589637/",
  "https://www.facebook.com/Monarchistic/",
  "https://www.facebook.com/TheBritishMonarchy/",
  "https://www.facebook.com/TheMonarchists/",
  "https://www.facebook.com/groups/13104676020/"
];
const anarchistUrls = [
  "https://www.reddit.com/r/Anarchism/",
  "https://libcom.org/",
  "https://libcom.org/forums/af",
  "http://www.anarchism.net/www.htm",
  "https://freedompress.org.uk/",
  "http://www.infoshop.org/",
  "https://raddle.me/f/Anarchism",
  "https://downandoutdistro.noblogs.org/files/2019/06/wargroup.pdf",
  "https://www.google.com/search?q=anarchism&tbm=nws",
  "https://www.facebook.com/a.revolt.digital.anarchy/",
  "https://www.facebook.com/anarchistsunited/",
  "https://www.facebook.com/Libertarianism.org/",
  "https://www.facebook.com/Feminist-Anarchism-376665792764351"
];
const lesbianUrls = [
  "https://www.facebook.com/infinity.beyond1208/",
  "https://www.facebook.com/lesbianswhotech/",
  "http://www.nclrights.org/",
  "http://www.lesbianavengers.com/",
  "http://lesbiansciencefiction.com/index.html",
  "https://www.google.com/search?q=lesbian+-gay&tbm=nws",
  "https://www.lesbiannews.com/",
  "http://scissr.com/",
  "https://www.facebook.com/LesbiDating/",
  "https://www.facebook.com/lezz.pride/",
  "https://www.facebook.com/Lesbian-Online-Community-wwwshoeorg-112065275541728/",
  "https://www.facebook.com/picbeautifulgirls/",
  "https://www.elitesingles.com/lesbian-dating?",
  "https://www.pinkcupid.com/",
  "https://www.facebook.com/hotnerdgirl/"
];
const gayUrls = [
  "https://www.facebook.com/GayStarNews/",
  "https://www.google.com/search?q=gay+-lesbian&tbm=nws",
  "https://www.facebook.com/groups/gaysdating/",
  "https://www.facebook.com/IncrediblyHotGuys",
  "https://www.facebook.com/Real-Hot-Handsome-Men-292241127919597",
  "https://www.facebook.com/Gay-Time-748164585378214",
  "https://www.pinterest.fr/tanyachester/hot-men/",
  "https://www.google.com/search?&q=hot+men+for+men&tbm=isch&source=univ",
  "http://www.instanthookups.com/find-hookups/men-seeking-men/",
  "https://www.adam4adam.com/",
  "https://gayfriendfinder.com/"
];
const thirdUrls = [
  "https://aplaceinthemiddle.org/news",
  "https://kumuhina.com/",
  "https://www.google.com/search?q=third+gender+news&tbm=nws",
  "https://nialler9.com/greased-up-and-ready-to-go-meet-sworn-virgins-the-mysterious-act-making-disco-youve-never-heard-before/",
  "https://www.facebook.com/sfainc/",
  "https://assofias.webs.com/visionmissioncharity.htm",
  "https://www.facebook.com/groups/97170793479/",
  "https://medium.com/the-omnivore/a-brief-history-of-mexicos-third-gender-7d80451419e6",
  "https://www.google.com/search?q=muhe+news&tbm=nws",
  "https://www.google.com/search?q=mahu+news&tbm=nws",
  "https://www.google.com/search?q=Muxe&tbm=isch"
];
function conbineUrls() {
  if (localStorage["political"] === "democrat") {
    urls.push.apply(urls, democratUrls);
  }
  if (localStorage["political"] === "republican") {
    urls.push.apply(urls, republicanUrls);
  }
  if (localStorage["political"] === "monarchist") {
    urls.push.apply(urls, monarchistUrls);
  }
  if (localStorage["political"] === "anarchist") {
    urls.push.apply(urls, anarchistUrls);
  }
  if (localStorage["sexual"] === "lesbian") {
    urls.push.apply(urls, lesbianUrls);
  }
  if (localStorage["sexual"] === "gay") {
    urls.push.apply(urls, gayUrls);
  }
  if (localStorage["sexual"] === "third") {
    urls.push.apply(urls, thirdUrls);
  }
  if (localStorage["political"] == null && localStorage["sexual"] == null) {
    urls.push.apply(urls, democratUrls);
    urls.push.apply(urls, republicanUrls);
    urls.push.apply(urls, monarchistUrls);
    urls.push.apply(urls, anarchistUrls);
    urls.push.apply(urls, lesbianUrls);
    urls.push.apply(urls, gayUrls);
    urls.push.apply(urls, thirdUrls);
  }
  if (localStorage["additional"]) {
    //convert string to array
    let additionalUrs = localStorage["additional"].split("\n");
    urls.push.apply(urls, additionalUrs);
  }
}

function chromeTabsCreateAsync(createProperties) {
  return new Promise((resolve, reject) => {
    chrome.tabs.create(createProperties, tab => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError));
      } else {
        resolve(tab);
      }
    });
  });
}
function chromeTabsUpdateAsync(tabid, createProperties) {
  return new Promise((resolve, reject) => {
    chrome.tabs.update(tabid, createProperties, tab => {
      if (chrome.runtime.lastError) {
        console.log(
          "chromeTabsUpdateAsync error:",
          chrome.runtime.lastError.message
        );
        reject(new Error(chrome.runtime.lastError));
      } else {
        // console.log("updated", tabid, " with url ", createProperties.url);
        resolve(tab);
      }
    });
  });
}

function waitfor(ms) {
  return new Promise(res => setInterval(res, ms));
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function injectScript(tabId) {
  let productUrls = [];
  chrome.tabs.executeScript(
    tabId,
    {
      code: 'Array.from(document.getElementsByTagName("a")).map(a => a.href)',
      runAt: "document_idle"
    },
    function(results) {
      let allLinks = results[0];
      if (allLinks) {
        for (let i = 0; i < allLinks.length; i++) {
          if (allLinks[i].indexOf("amazon") !== -1) {
            if (productUrls.indexOf(allLinks[i]) === -1) {
              // insert only unique links
              productUrls.push(allLinks[i]);
            }
          }
        }
        urls.push.apply(urls, productUrls);
      }
    }
  );
}

async function main() {
  conbineUrls();
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        message: "clicked_browser_action"
      });
    });
  });

  chrome.runtime.onMessage.addListener(async function(
    request,
    sender,
    sendResponse
  ) {
    console.log("message recieved", request.message);
    if (request.message === "open_new_tab") {
      let tab = await chromeTabsCreateAsync({
        url: request.url,
        active: false
      });
      // console.log("Tab created: ", tab.id, "url", request.url, new Date());
      await waitfor(10000);
      chrome.tabs.get(tab.id, function(tab) {
        // console.log("id", tab.id, "status", tab.status, "url", tab.url);
        if (tab.status === "complete") {
          injectScript(tab.id);
        }
      });
      await waitfor(3000);

      console.log("urls", urls.length);
      for (let index = 0; index < 100; index++) {
        let random2 = getRandomInt(urls.length, 0);
        try {
          await chromeTabsUpdateAsync(tab.id, { url: urls[random2] });
        } catch (e) {
          console.log("er:", e, "exiting...");
          return;
        }
        // console.log(
        //   "Tab updated: ",
        //   tab.id,
        //   "new url",
        //   urls[random2],
        //   new Date()
        // );
        /* this code seems not working
        let newUrl = urls[random2];
        chrome.history.deleteUrl({ url: newUrl });
        chrome.history.onVisitRemoved.addListener(function(newUrl) {
          console.log(newUrl, "removed");
        });
        */
        let random = Math.random() * 2000 * (100 - 1) + 1;
        await waitfor(random);
      }
    }
  });
}
main();
