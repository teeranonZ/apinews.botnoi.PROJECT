import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsStorageService {
  private news: any[] = [];

  constructor() { }

  getNews(): any[] {
    return this.news;
  }
  
  ['setMockNews'](): void {
    // Mock news data
    this.news = [
      {
        source: { id: null,  "name": "The Verge"
      },
      "author": "Victoria Song",
      "title": "The Fitbit Ace LTE is like a Nintendo smartwatch for kids - The Verge",
      "description": "The $229.95 Fitbit Ace LTE is a fresh take on a smartwatch for children, with collectible wristbands, games, and built-in LTE connectivity for parents.",
      "url": "https://www.theverge.com/2024/5/29/24166168/fitbit-ace-lte-kids-smartwatch-wearables",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/5ArooDMLHCBTwhBt56n9tTeYAh8=/0x0:6589x4393/1200x628/filters:focal(3295x2197:3296x2198)/cdn.vox-cdn.com/uploads/chorus_asset/file/25466808/247127_Fitbit_Ace_LTE_VSong_0007.jpg",
      "publishedAt": "2024-05-29T14:00:00Z",
      "content": "The Fitbit Ace LTE is like a Nintendo smartwatch for kids\r\nThe Fitbit Ace LTE is like a Nintendo smartwatch for kids\r\n / This smartwatch for kids offers a fresher take on gamifying activity, while al… [+5040 chars]"
  },
      {
        source: { id: null, "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "Gautam Gambhir's \"Leading To A Division In The Team\" Statement Boosted KKR: Shah Rukh Khan's Mega Re.. - NDTV Sports",
      "description": "Shah Rukh Khan, KKR co-owner, revealed in a long post how Gautam Gambhir's philosophy changed the outlook of KKR.",
      "url": "https://sports.ndtv.com/cricket/gautam-gambhirs-leading-to-a-division-in-the-team-statement-boosted-kkr-shah-rukh-khans-mega-reveal-5772281",
      "urlToImage": "https://c.ndtvimg.com/2024-05/hkkt5ln_srk-gambhir_625x300_28_May_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      "publishedAt": "2024-05-29T13:54:00Z",
      "content": "Gautam Gambhir seems to have the Midas Touch in the IPL. After guiding Lucknow Super Giants to two successive IPL playoffs, this time he went a step ahead as Kolkata Knight Riders' mentor. Under his … [+1971 chars]"
  },

  {
    source: { id: null, "name": "Hindustan Times"
  },
  "author": "Arya Vaishnavi",
  "title": "Single mom who went viral for crying while baking own birthday cake says ex-husband is ‘Scientologist’ - Hindustan Times",
  "description": "Following her ex-husband, Andrew Cormier's shocking allegations, Elizabeth Teckenbrock countered with a tearful video, where she accused him of being “abusive.”",
  "url": "https://www.hindustantimes.com/world-news/us-news/single-mom-who-went-viral-for-crying-while-baking-own-birthday-cake-calls-ex-husband-abusive-101716982276431.html",
  "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/29/1600x900/tik_1716986494356_1716986503350.png",
  "publishedAt": "2024-05-29T12:44:36Z",
  "content": "A single mom recently went viral for crying on TikTok while baking her own birthday cake. Elizabeth Teckenbrock shared the now-deleted video on May 23, where she was seen sobbing while preparing the … [+2442 chars]"
},


{
  "source": {
      "id": null,
      "name": "Stirpad.com"
  },
  "author": null,
  "title": "'Desire Utensil Container': charting territory's transformation into objects of desire - STIRpad",
  "description": "Desire Utensil Container is the first solo exhibition of Swedish artist, sculptor and glassmaker &amp;Aring;sa Jungnelius at Spazio Nobile Gallery in Brussels, Belgium, which attempts to address existential questions through materiality. Running from March 22…",
  "url": "https://www.stirpad.com/news/stir-news/desire-utensil-container-charting-territory-s-transformation-into-objects-of-desire/?utm_source=search_bar&amp;utm_medium=stirpad_search",
  "urlToImage": "https://www.stirpad.com/images/news/240529014157_n.jpg",
  "publishedAt": "2024-05-29T12:29:39Z",
  "content": "Desire Utensil Container is the first solo exhibition of Swedish artist, sculptor and glassmaker Åsa Jungnelius at Spazio Nobile Gallery in Brussels, Belgium, which attempts to address existential qu… [+5514 chars]"
},
{
  "source": {
      "id": null,
      "name": "Hindustan Times"
  },
  "author": "HT Correspondent",
  "title": "Delhi records hottest day at 52.3°C in Mungeshpur; light rains bring relief - Hindustan Times",
  "description": "The weather, however, improved after dust storms accompanied by light rains brought down the temperature across the national Capital | Latest News Delhi",
  "url": "https://www.hindustantimes.com/cities/delhi-news/delhi-records-hottest-day-at-52-3-c-in-mungeshpur-light-rains-bring-relief-101716984504524.html",
  "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/29/1600x900/The-station--including-three-others--had-reached-4_1716984460432.jpg",
  "publishedAt": "2024-05-29T12:08:24Z",
  "content": "Delhis Mungeshpur on Wednesday recorded its highest-ever temperature at 52.3°C at around 2:30pm amid severe heatwave conditions across north India. \r\nThe station, including three others, had reached … [+2097 chars]"
},
{
  "source": {
      "id": null,
      "name": "Livemint"
  },
  "author": null,
  "title": "Car wash in Delhi: You have to pay fines amid ‘serious wastage of water’; netizens react to AAP minister Atishi's post | Today News - Mint",
  "description": null,
  "url": "https://www.livemint.com/news/india/car-wash-in-delhi-you-may-have-to-pay-fines-amid-serious-wastage-of-water-in-capital-city-netizens-react-11716983490379.html",
  "urlToImage": null,
  "publishedAt": "2024-05-29T12:03:22Z",
  "content": null
},
{
  "source": {
      "id": null,
      "name": "FC Barcelona"
  },
  "author": "FC Barcelona",
  "title": "Hansi Flick is the new FC Barcelona coach - FC Barcelona",
  "description": "The German coach signs a contract until 30 June 2026",
  "url": "https://www.fcbarcelona.com/en/football/first-team/news/4029878/hansi-flick-is-the-new-fc-barcelona-coach",
  "urlToImage": "https://www.fcbarcelona.com/fcbarcelona/photo/2024/05/29/85187440-9f41-4d27-9104-3bc512f0a65d/_GP19035.jpg",
  "publishedAt": "2024-05-29T11:43:59Z",
  "content": "FC Barcelona and Hansi Flick have reached an agreement for the German to become mens first team football coach until 30 June 2026. The new coach has signed a contract at the Clubs offices accompanied… [+2967 chars]"
},
{
  "source": {
      "id": "google-news",
      "name": "Google News"
  },
  "author": "Moneycontrol",
  "title": "RBI imposes business restrictions on ECL Finance, Edelweiss ARC citing material concerns - Moneycontrol",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMikAFodHRwczovL3d3dy5tb25leWNvbnRyb2wuY29tL25ld3MvYnVzaW5lc3MvcmJpLWltcG9zZXMtYnVzaW5lc3MtcmVzdHJpY3Rpb25zLW9uLWVjbC1maW5hbmNlLWVkZWx3ZWlzcy1hcmMtY2l0aW5nLW1hdGVyaWFsLWNvbmNlcm5zLTEyNzM1ODkxLmh0bWzSAZQBaHR0cHM6Ly93d3cubW9uZXljb250cm9sLmNvbS9uZXdzL2J1c2luZXNzL3JiaS1pbXBvc2VzLWJ1c2luZXNzLXJlc3RyaWN0aW9ucy1vbi1lY2wtZmluYW5jZS1lZGVsd2Vpc3MtYXJjLWNpdGluZy1tYXRlcmlhbC1jb25jZXJucy0xMjczNTg5MS5odG1sL2FtcA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-05-29T11:25:19Z",
  "content": null
},
{
  "source": {
      "id": null,
      "name": "DNA India"
  },
  "author": "Chankesh Rao",
  "title": "Hardik Pandya finally breaks silence amid divorce rumours with Natasa Stankovic - DNA India",
  "description": "While neither Hardik nor Natasa have addressed the divorce rumors, the all-rounder took to social media to share a significant update.",
  "url": "https://www.dnaindia.com/cricket/report-hardik-pandya-finally-breaks-silence-amid-divorce-rumours-with-natasa-stankovic-3091156",
  "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2024/05/29/2636133-untitled-design-60.jpg",
  "publishedAt": "2024-05-29T11:20:00Z",
  "content": "While neither Hardik nor Natasa have addressed the divorce rumors, the all-rounder took to social media to share a significant update. Indian cricket team all-rounder Hardik Pandya recently made head… [+1818 chars]"
},
{
  "source": {
      "id": null,
      "name": "The Indian Express"
  },
  "author": "The Indian Express",
  "title": "Delhi breaches 8,300-MW first time ever as heatwave sends power demand soaring - The Indian Express",
  "description": null,
  "url": "https://indianexpress.com/article/cities/delhi/delhi-power-demand-heatwave-temperature-9359258/",
  "urlToImage": null,
  "publishedAt": "2024-05-29T11:14:08Z",
  "content": null
},
{
  "source": {
      "id": "google-news",
      "name": "Google News"
  },
  "author": "India Today",
  "title": "European spacecraft traces origin of solar wind that hit it in space - India Today",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMif2h0dHBzOi8vd3d3LmluZGlhdG9kYXkuaW4vc2NpZW5jZS9zdG9yeS9ldXJvcGVhbi1zcGFjZWNyYWZ0LXRyYWNlcy1vcmlnaW4tb2Ytc29sYXItd2luZC10aGF0LWhpdC1pdC1pbi1zcGFjZS0yNTQ1MjczLTIwMjQtMDUtMjnSAYMBaHR0cHM6Ly93d3cuaW5kaWF0b2RheS5pbi9hbXAvc2NpZW5jZS9zdG9yeS9ldXJvcGVhbi1zcGFjZWNyYWZ0LXRyYWNlcy1vcmlnaW4tb2Ytc29sYXItd2luZC10aGF0LWhpdC1pdC1pbi1zcGFjZS0yNTQ1MjczLTIwMjQtMDUtMjk?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-05-29T10:39:17Z",
  "content": null
},
{
  "source": {
      "id": null,
      "name": "Financial Express"
  },
  "author": "The Financial Express",
  "title": "Nothing adds a dash of colour to its transparent Phone 2a — here’s your first look at new ‘special edition’ model - The Financial Express",
  "description": null,
  "url": "https://www.financialexpress.com/life/technology-nothing-adds-a-dash-of-colour-to-its-transparent-phone-2a-heres-your-first-look-at-new-special-edition-model-3506158/",
  "urlToImage": null,
  "publishedAt": "2024-05-29T10:31:26Z",
  "content": null
},
{
  "source": {
      "id": "google-news",
      "name": "Google News"
  },
  "author": "News18",
  "title": "Mani Shankar Aiyar Sparks Fresh Row, Says Chinese 'Allegedly Invaded' India in 1962, Apologises for 'Mistak - News18",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMieWh0dHBzOi8vd3d3Lm5ld3MxOC5jb20vcG9saXRpY3MvbWFuaS1zaGFua2FyLWFpeWFyLWNoaW5lc2UtYWxsZWdlZGx5LWludmFkZWQtaW5kaWEtMTk2Mi1yb3ctYXBvbG9naXNlcy1sYXRlci04OTA3OTkxLmh0bWzSAX1odHRwczovL3d3dy5uZXdzMTguY29tL2FtcC9wb2xpdGljcy9tYW5pLXNoYW5rYXItYWl5YXItY2hpbmVzZS1hbGxlZ2VkbHktaW52YWRlZC1pbmRpYS0xOTYyLXJvdy1hcG9sb2dpc2VzLWxhdGVyLTg5MDc5OTEuaHRtbA?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-05-29T10:13:27Z",
  "content": null
},
{
  "source": {
      "id": null,
      "name": "NDTV News"
  },
  "author": null,
  "title": "PM Modi In Attack Mode, Claims \"Conspiracy\" Over Naveen Patnaik's Health - NDTV",
  "description": "PM Modi has taken another jab at Odisha Chief Minister Naveen Patnaik over his \"health issues\", claiming a conspiracy linked to the \"lobby running the government\".",
  "url": "https://www.ndtv.com/india-news/pm-modi-naveen-patnaik-health-vk-pandian-odisha-election-news-pm-modi-in-attack-mode-claims-conspiracy-over-naveen-patnaiks-health-5771219",
  "urlToImage": "https://c.ndtvimg.com/2024-05/oo51js9g_pm-modi-naveen-patnaik-_625x300_28_May_24.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240506.08",
  "publishedAt": "2024-05-29T10:12:37Z",
  "content": "Prime Minister Narendra Modi and Odisha Chief Minister Naveen Patnaik (File).\r\nNew Delhi: Odisha Chief Minister Naveen Patnaik's \"advanced age and health issues\" remains a fertile source of jibes and… [+4421 chars]"
},
{
  "source": {
      "id": null,
      "name": "Firstpost"
  },
  "author": "Prakriti Jash, Prakriti Jash",
  "title": "South Africa 2024 Elections LIVE: Voters line up for most closely watched elections since 1994 - Firstpost",
  "description": "South Africa 2024 Elections LIVE Updates: According to social media reports, voting is going well in much of South Africa on this frigid winter morning, however some stations were delayed due to technological issues",
  "url": "https://www.firstpost.com/world/south-africa-2024-elections-live-13776319.html",
  "urlToImage": "https://images.firstpost.com/uploads/2024/05/Vote-SA-2024-05-40ba46c5792163e5d6ebb1cc6e08915c.jpg?im=FitAndFill=(1200,675)",
  "publishedAt": "2024-05-29T10:11:56Z",
  "content": "South Africans will vote on Wednesday in what is being billed as their country’s most significant election in 30 years, and it has the potential to plunge their fledgling democracy into unfamiliar te… [+2021 chars]"
},
{
  "source": {
      "id": "google-news",
      "name": "Google News"
  },
  "author": "NDTV",
  "title": "Explained: What Probe Into Turbulence-Hit Singapore Airlines Flight Reveals - NDTV",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvZXhwbGFpbmVkLXdoYXQtcHJvYmUtaW50by10dXJidWxlbmNlLWhpdC1zaW5nYXBvcmUtYWlybGluZXMtZmxpZ2h0LXJldmVhbHMtNTc3MDk4M9IBeGh0dHBzOi8vd3d3Lm5kdHYuY29tL3dvcmxkLW5ld3MvZXhwbGFpbmVkLXdoYXQtcHJvYmUtaW50by10dXJidWxlbmNlLWhpdC1zaW5nYXBvcmUtYWlybGluZXMtZmxpZ2h0LXJldmVhbHMtNTc3MDk4My9hbXAvMQ?oc=5",
  "urlToImage": null,
  "publishedAt": "2024-05-29T09:45:41Z",
  "content": null
},
{
  "source": {
      "id": null,
      "name": "Hindustan Times"
  },
  "author": "Neeshita Nyayapati",
  "title": "Nag Ashwin invites Elon Musk to drive Bujji from Kalki 2898 AD: ‘Will make for a great photo-op with Cybertruck’ - Hindustan Times",
  "description": "Bujji is Prabhas’ character Bhairava’s robotic sidekick in Nag Ashwin’s upcoming sci-fi film Kalki 2898 AD. The film will be released on June 27.",
  "url": "https://www.hindustantimes.com/entertainment/telugu-cinema/nag-ashwin-invites-elon-musk-to-drive-bujji-from-prabhas-kalki-2898-ad-101716969921461.html",
  "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/05/29/1600x900/Nag_Ashwin_Elon_Musk_Kalki_2898_AD_1716970146465_1716970161231.jpg",
  "publishedAt": "2024-05-29T08:52:41Z",
  "content": "Since director Nag Ashwin and Prabhas unveiled the one-of-a-kind Bujji, a custom-made vehicle made for Kalki 2898 AD, at an event in Hyderabad last week, theyve been promoting it through various medi… [+2414 chars]"
},

    ];
  }
}
