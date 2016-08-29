app.service('equipmentSrvc', function(){

  // const template = {
  //   reviewVideo1 : ,
  //   reviewThumb1 : ,
  //   reviewVideo2 : ,
  //   reviewThumb2 : ,
  //   affiliateLink : ,
  //   productImg : ,
  //   header : '',
  //   body : ''
  // }

  const t5i = {
    reviewVideo1 : 'oNyuP98KO3A',
    reviewThumb1 : 't5i-review-1.jpg',
    reviewVideo2 : 'N5Se3zSpyHw',
    reviewThumb2 : 't5i-review-2.jpg',
    affiliateLink : 'https://www.amazon.com/gp/product/B00BW6LWO4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00BW6LWO4&linkCode=as2&tag=medi0513-20&linkId=84cbcea00048bfebb1764afec39def5f',
    productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00BW6LWO4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=medi0513-20',
    header : 'Canon T5i',
    body : 'The T5i is the usual starting DSLR for most YouTubers. It has a full 180 viewfinder that allows you to film yourself. Its easier to use than most other DSLRs, while also being more durable than most. The image quality is top-notch for the price.'
  }

  const basicTripod = {
    reviewVideo1 : 'AsFp-71l-d4',
    reviewThumb1 : 'basic-tripod-review-1.jpg',
    reviewVideo2 : 'XiDyjCiaMd8',
    reviewThumb2 :  'basic-tripod-review-2.jpg',
    affiliateLink : "https://www.amazon.com/gp/product/B005KP473Q/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B005KP473Q&linkCode=as2&tag=medi0513-20&linkId=35653d8b5a812d5f89b1f6162157608c",
    productImg : "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B005KP473Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=medi0513-20",
    header : 'Amazon Basics Tripod',
    body : "This is the best basic tripod. It is sturdy enough to hold most DSLRs including the T5i. It's incredible more durable than comparable tripods."
  }

  const basicLavalier = {
    reviewVideo1 : 'yYSQeGVveh4',
    reviewThumb1 : 'begin-lavalier-1.jpg',
    reviewVideo2 : 'o22pEErv11I',
    reviewThumb2 : 'begin-lavalier-2.jpg',
    affiliateLink : 'https://www.amazon.com/EOS-Rebel-External-Microphone-microphone/dp/B00H4I5574/ref=as_li_ss_il?ie=UTF8&qid=1470872600&sr=8-1-fkmr1&keywords=canon+t5i+lavalier&linkCode=li3&tag=medi0513-20&linkId=9176c9b24b6ab1c3d4701b3a5b1e0fe5',
    productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00H4I5574&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
    header : 'Vidpro XM-L Wired Lavalier microphone',
    body : "A lavalier microphone is your best bet when filming in an acoustic room or filming outdoors when there's wind. The lavalier significantly reduces ambient sounds, while usually being the most affordable option as well. The reason why lavaliers will record better than any other microphone at the same price range is because lavaliers are so close to a speaker's mouth which hellp with recording quality sound."
  }

  const rodeShotgun = {
    reviewVideo1 : 'HM-dTyTeCes',
    reviewThumb1 : 'rode-review-1.jpg',
    reviewVideo2 : '6JhD4D6N2sE',
    reviewThumb2 : 'rode-review-2.jpg',
    affiliateLink : 'https://www.amazon.com/Rode-VMPR-VideoMic-Rycote-Shockmount/dp/B00YAZHRZM/ref=as_li_ss_il?s=photo&ie=UTF8&qid=1472063650&sr=1-1&keywords=rode+videopro&linkCode=li3&tag=medi0513-20&linkId=b844b38567e6ce7315b51b62e4c4a591',
    productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00YAZHRZM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
    header : 'Rode VideoMic Pro Compact Shotgun Microphone',
    body : `The Rode VideoMic Pro Shotgun is records best in soundproofed rooms or outdoors when there's little wind. The quality of the sound for price of this microphone makes it a YouTuber favorite. The 3 main benefits with a shotgun microphone over a lavalier is: 1. Viewers don't have to see your microphone, 2. convenience of not having to hook up a microphone and 3. capturing a small amount
        of reverb makes the recording better.`
  }

  const limoStudio = {
    reviewVideo1 : 'u6wAMSHozfw',
    reviewThumb1 :'limostudio-review-1.jpg',
    reviewVideo2 : '0zyBQAex0Kw',
    reviewThumb2 : 'limostudio-review-2.jpg',
    affiliateLink : 'https://www.amazon.com/LimoStudio-Photography-Lighting-Equipment-AGG814/dp/B00E4YS2XU/ref=as_li_ss_il?s=photo&ie=UTF8&qid=1472062868&sr=1-1&keywords=softbox&linkCode=li3&tag=medi0513-20&linkId=4c58991c7192f5f9baf84d884db00273',
    productImg : "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00E4YS2XU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20",
    header :  'LimoStudio 700W Photography Softbox Light Lighting',
    body : `After your first few YouTube videos, you may notice that your video quality is looking like crap. It's easy to rush into buying the best DSLR available. In most cases camera quality isn't the problem, it's usually lighting. Lighting plays a great role
    in the quality and also look of a video. Getting a basic pair of softbox lights will improve the video quality of videos while also giving you control over lighting. This is particularly useful when shooting at night.`
}

this.beginnerArray = [
  t5i,
  basicTripod,
  basicLavalier,
  rodeShotgun,
  limoStudio
]

})
