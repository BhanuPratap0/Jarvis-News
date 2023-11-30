import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles= [
    {
      "source": {
          "id": null,
          "name": "The Athletic"
      },
      "author": "Alec Lewis",
      "title": "Josh Dobbs comes back down to earth in loss to Bears, and now Vikings have questions at QB - The Athletic",
      "description": "Dobbs throws four interceptions as rhythm and timing of Minnesota offense are noticeably off in disappointing 12-10 loss to Bears.",
      "url": "https://theathletic.com/5095369/2023/11/28/josh-dobbs-vikings-bears-qb/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/11/28030848/GettyImages-1817754436-scaled-e1701158985332.jpg",
      "publishedAt": "2023-11-28T14:29:15Z",
      "content": "MINNEAPOLIS This is what it looks like to believe, to think something is possible, then to watch it evaporate in plain sight.\r\nMinnesota Vikings coach Kevin OConnell stared out at the developing play… [+8400 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Jackie Wattles",
      "title": "These magnificent purple and green lights aren’t auroras. This is Steve - CNN",
      "description": "Research of the phenomenon called Steve has been driven by citizen photographers. As the solar maximum approaches, there could be even more opportunities to spot it.",
      "url": "https://www.cnn.com/2023/11/28/world/steve-aurora-lights-scn/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231127125312-01-space-phenomenon-steve.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-28T13:57:00Z",
      "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nNot all science is carried out by folks in white lab c… [+8185 chars]"
  },
  {
      "source": {
          "id": "fox-news",
          "name": "Fox News"
      },
      "author": "Chad Pergram, Chris Pandolfo",
      "title": "Hunter Biden agrees to House Oversight Committee testimony - Fox News",
      "description": "President Biden's son, Hunter Biden, has offered to testify to the House Oversight Committee after receiving a subpoena, according to a letter sent to the committee on Nov. 28.",
      "url": "https://www.foxnews.com/politics/hunter-biden-agrees-house-oversight-committee-testimony",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/GettyImages-1255040527.jpg",
      "publishedAt": "2023-11-28T13:48:00Z",
      "content": "Hunter Biden has offered to testify publicly before the House Oversight Committee on Dec. 13, according to a letter obtained by Fox News.\r\nThe president's son agreed to comply with a subpoena issued … [+4198 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Clarissa Ward, Rachel Clarke",
      "title": "Father describes how his young daughter Emily survived Hamas captivity - CNN",
      "description": "Emily Hand had to run from house to house, forced to move by Hamas as Israeli forces attacked Gaza, her father Thomas Hand told CNN.",
      "url": "https://www.cnn.com/2023/11/28/middleeast/thomas-hand-emily-hostage-intl/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231128073555-01-thomas-emily-hand-reunion-1126.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-28T13:09:00Z",
      "content": "Emily Hand had to run from house to house, forced to move by Hamas as Israeli forces attacked Gaza, her father Thomas Hand told CNN.\r\nThats terrifying. Being pulled, dragged, pushed under gunfire pro… [+6137 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "Fox Business"
      },
      "author": "Pilar Arias",
      "title": "Law enforcement agencies issue warnings after latest Apple iOS release - Fox Business",
      "description": "Law enforcement agencies across the United States are warning about a new Apple feature with the iOS 17 update, but some are saying it is not necessary.",
      "url": "https://www.foxbusiness.com/lifestyle/law-enforcement-agencies-issue-warnings-latest-apple-ios-release",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/11/0/0/iOS17-2.jpg?ve=1&tl=1",
      "publishedAt": "2023-11-28T13:02:00Z",
      "content": "Law enforcement agencies across the U.S. are warning iPhone users about a feature released with the newest software update called NameDrop.\r\n\"With iOS 17.1 and watchOS 10.1, you can use NameDrop to q… [+2353 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "Ukraine spy chief's wife Marianna Budanova ill in suspected poisoning - BBC.com",
      "description": "Kyrylo Budanov's wife, Marianna, is being treated in hospital, a Ukrainian intelligence source says.",
      "url": "https://www.bbc.com/news/world-europe-67552036",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1376C/production/_128142797_0b6f0c65-89a7-4263-af33-039a3d525b28.jpg",
      "publishedAt": "2023-11-28T12:58:00Z",
      "content": "By Jaroslav LukivBBC News\r\nGen Budanov said earlier this year that he and Marianna Budanova had lived in his office since February 2022 for safety reasons\r\nThe wife of Ukraine's spy chief, Lt Gen Kyr… [+3472 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Alexandra Banner",
      "title": "5 things to know for Nov. 28: Israel, Rosalynn Carter, Climate, Tunnel collapse, Google - CNN",
      "description": "CNN’s 5 Things brings you the news you need to know every morning.",
      "url": "https://www.cnn.com/2023/11/28/us/5-things-to-know-for-nov-28-israel-rosalynn-carter-climate-tunnel-collapse-google/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231126140234-01-israel-gaza-gallery-update-112623.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-28T12:52:00Z",
      "content": "Today is Giving Tuesday, a day of generosity dedicated to volunteering, donating, and doing good for others. If youd like to participate, you can start by contemplating the causes close to your heart… [+5814 chars]"
  },
  {
      "source": {
          "id": "usa-today",
          "name": "USA Today"
      },
      "author": "Emily DeLetter",
      "title": "'The Voice' contestant Tom Nitti leaves Season 24 for 'personal reasons,' will not return - USA TODAY",
      "description": "Country singer Tom Nitti was on Team Reba, and it was announced Monday that he had left the show for \"personal reasons.\"",
      "url": "https://www.usatoday.com/story/entertainment/tv/2023/11/28/tom-nitti-leaves-the-voice-season-24/71726153007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/28/USAT/71726306007-nup-201923-00997.jpg?crop=999,562,x0,y52&width=999&height=562&format=pjpg&auto=webp",
      "publishedAt": "2023-11-28T12:50:08Z",
      "content": "Country singer and contestant on NBC's \"The Voice\" Tom Nitti was absent in Monday's episode, and it was revealed that he will not be returning to the competition.\r\nNitti, who was on Team Reba, was no… [+1433 chars]"
  },
  {
      "source": {
          "id": "cnn",
          "name": "CNN"
      },
      "author": "Rhea Mogul",
      "title": "Rescuers successfully drill through to trapped men in Himalayan tunnel in breakthrough for perilous operation - CNN",
      "description": "Rescuers in northern India have rescued 13 of the 41 workers trapped in the Silkyara tunnel in Uttarakhand, government district information officer Kirti Panwar told CNN on Tuesday.",
      "url": "https://www.cnn.com/2023/11/28/india/india-tunnel-rescue-vertical-drilling-intl-hnk/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/231121043137-exp-india-tunnel-collapse-rescue-efforts-sud-pkg-112103aseg2-cnni-world-00005319.png?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-11-28T12:35:00Z",
      "content": "Rescuers in northern India have rescued 13 of the 41 workers trapped in a tunnel under the Himalayas, government district information officer Kirti Panwar told CNN on Tuesday.\r\nVideo footage from the… [+2033 chars]"
  },
  {
      "source": {
          "id": "the-washington-post",
          "name": "The Washington Post"
      },
      "author": "Mark Johnson",
      "title": "Newly discovered stem cell offers clues to a cancer mystery - The Washington Post",
      "description": "The finding may help resolve a long-standing question: Why do far more cancer cells spread to the spine than to other bones in the body?",
      "url": "https://www.washingtonpost.com/science/2023/11/28/new-stem-cell-spine-cancer/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SRTKPNR6MEI6ZPLP3I3W6RZQJY.jpg&w=1440",
      "publishedAt": "2023-11-28T12:34:50Z",
      "content": "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nScientists have discovered a new type of stem cell in the spine that appears crucial to resolving a long-standing mystery: why far mor… [+5258 chars]"
  },
  {
      "source": {
          "id": "financial-post",
          "name": "Financial Post"
      },
      "author": "Bloomberg News",
      "title": "Elon Musk's Cybertruck is already a production nightmare for Tesla - Financial Post",
      "description": "The Cybertruck hasn’t even hit the market yet, and Elon Musk already is lamenting that Tesla Inc. has dug its own grave. Read more.",
      "url": "https://financialpost.com/commodities/energy/electric-vehicles/elon-musk-cybertruck-production-nightmare-tesla",
      "urlToImage": "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2023/11/elon-musk-cybertruck.jpg",
      "publishedAt": "2023-11-28T12:33:45Z",
      "content": "Musk says Tesla is digging its own grave with the Cybertruck, full of 'a lot of bells and whistles'\r\nAuthor of the article:\r\nElon Musk introduces the newly unveiled all-electric battery-powered Tesla… [+10782 chars]"
  },
  {
      "source": {
          "id": "usa-today",
          "name": "USA Today"
      },
      "author": "Christopher Cann",
      "title": "Rosalynn Carter, former first lady, remembered in 3-day memorial services across Georgia - USA TODAY",
      "description": "The life and legacy of former first lady Rosalynn Carter will be remembered and celebrated in three days of memorial services beginning Monday.",
      "url": "https://www.usatoday.com/story/news/nation/2023/11/27/rosalynn-jimmy-carter-first-lady/71675274007/",
      "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/17/USAT/71626515007-rosalynn-3.JPG?crop=1999,1125,x0,y238&width=1999&height=1125&format=pjpg&auto=webp",
      "publishedAt": "2023-11-28T12:12:17Z",
      "content": "The life and legacy of former first lady Rosalynn Carter, who died on Nov. 19 at the age of 96, will be celebrated over three days this week in a series of memorial services across Georgia, from Atla… [+6201 chars]"
  },
  {
      "source": {
          "id": "espn",
          "name": "ESPN"
      },
      "author": "NFL Nation",
      "title": "NFL Week 13 Power Rankings 2023: How all 32 teams stack up - ESPN",
      "description": "Which NFL team has entered the top 10? And we take stock of every team's offense, defense and special teams through 12 weeks.",
      "url": "https://www.espn.com/nfl/story/_/page/NFLpowerranking112723/nfl-week-13-power-rankings-poll-2023-plus-offense-defense-special-team",
      "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1127%2Fnfl_power13_cr_16x9.jpg",
      "publishedAt": "2023-11-28T12:00:00Z",
      "content": "Welcome to Week 13 of the 2023 NFL season. Three months are in the books, and that means teams are gearing up for the playoff push -- and others are looking to the offseason.\r\nThis past week we had s… [+23897 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "PCMag.com"
      },
      "author": "Jade Chung-Lee",
      "title": "200+ Editor-Approved Cyber Monday Deals in 15 Key Tech Categories - PCMag",
      "description": "Prices aren't going to get much lower this year. Don't miss your last chance to score major savings on everything from laptops, monitors and TVs to headphones, smartwatches, and robot vacuums.",
      "url": "https://www.pcmag.com/news/best-cyber-monday-computer-electronics-deals",
      "urlToImage": "https://i.pcmag.com/imagery/articles/05h5IoIDLHsTiOdVySysurU-1.fit_lim.size_1200x630.v1701032135.png",
      "publishedAt": "2023-11-28T11:54:22Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "YouTube"
      },
      "author": null,
      "title": "What are the economic factors still limiting the green energy transition? | The Big Question | TEASE - euronews",
      "description": "WATCH THE FULL EPISODE NOW: https://www.youtube.com/watch?v=eMidaf2XmFk&list=PLSyY1udCyYqCSxmFRNEpDT0MilAJEaFQJThe Big Question is a brand new series from Eu...",
      "url": "https://www.youtube.com/watch?v=fHZLh923y7g",
      "urlToImage": "https://i.ytimg.com/vi/fHZLh923y7g/maxresdefault.jpg",
      "publishedAt": "2023-11-28T11:44:44Z",
      "content": null
  },
  {
      "source": {
          "id": null,
          "name": "[Removed]"
      },
      "author": null,
      "title": "[Removed]",
      "description": "[Removed]",
      "url": "https://removed.com",
      "urlToImage": null,
      "publishedAt": "1970-01-01T00:00:00Z",
      "content": "[Removed]"
  },
  {
      "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "After China, mysterious respiratory illness affecting mainly children, raises alarms in US - IndiaTimes",
      "description": "US News: Reports of a mysterious respiratory illness in Chinese hospitals have prompted concerns within the medical community and in Washington D.C. Hospitals,",
      "url": "https://timesofindia.indiatimes.com/world/us/after-china-mysterious-respiratory-illness-affecting-mainly-children-raises-alarms-in-us/articleshow/105564019.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-105564167,width-1070,height-580,imgsize-81178,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-11-28T11:34:57Z",
      "content": "8 vegetarian dishes from Kashmiri Pandit cuisine that are a must-try"
  },
  {
      "source": {
          "id": "the-verge",
          "name": "The Verge"
      },
      "author": "Jon Porter",
      "title": "Reminder: Google is about to start purging inactive accounts - The Verge",
      "description": "You might want to sign into your old and unused Google accounts prevent them from being deleted under Google’s inactive account policy. The rules were announced in May.",
      "url": "https://www.theverge.com/2023/11/28/23979178/google-inactive-accounts-deletion-december-2023-psa-reminder",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/a1UuqmTXeWu_sDyVAVipeGpIQ0s=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24016885/STK093_Google_04.jpg",
      "publishedAt": "2023-11-28T10:56:29Z",
      "content": "Reminder: Google is about to start purging inactive accounts\r\nReminder: Google is about to start purging inactive accounts\r\n / At the end of this week, Google will begin deleting accounts that have b… [+2714 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "Tiffany Haddish DUI: Comedian says she will get help after driving under influence arrest - BBC.com",
      "description": "The Girls Trip actress says \"this will never happen again\" after being arrested for driving under the influence.",
      "url": "https://www.bbc.com/news/entertainment-arts-67553138",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5D37/production/_131836832_gettyimages-1681653882.jpg",
      "publishedAt": "2023-11-28T10:55:00Z",
      "content": "Copyright 2023 BBC. All rights reserved.  The BBC is not responsible for the content of external sites. Read about our approach to external linking.\r\nBeta Terms By using the Beta Site, you agree that… [+595 chars]"
  },
  {
      "source": {
          "id": null,
          "name": "BBC News"
      },
      "author": null,
      "title": "'Granny, I've been shot,' said Palestinian student targeted in Vermont - BBC.com",
      "description": "With a bullet lodged in his spine, Hisham Awartani phoned his British-born grandmother after Saturday's shooting.",
      "url": "https://www.bbc.com/news/world-us-canada-67524008",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/499B/production/_131834881_whatsappimage2023-11-27at14.40.32-12.jpg",
      "publishedAt": "2023-11-28T10:13:00Z",
      "content": "By Nadine YousifBBC News, Burlington, Vermont\r\nWatch: Palestinian students called for help: 'Granny I've been shot'\r\nAfter being ambushed and shot in the spine on a US street at the weekend, Hisham A… [+4789 chars]"
  }
  ]
  constructor(){
    super();
    this.state={
      articles: this.articles
    }
  }
  render() {
    return (
    <>
    <div className='container my-3'>
        <h1>Latest News</h1>
        <div className='row' >
          {this.state.articles.map((element)=>{ return <div key={element.url} className='col-md-4'>
            <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>})}
        </div>
    </div>
    </>
    )
  }
}

export default News
