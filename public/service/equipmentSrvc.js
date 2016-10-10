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
    affiliateLink : "https://www.amazon.com/gp/product/B00BW6LWO4/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00BW6LWO4&linkCode=as2&tag=medi0eb7-20&linkId=a87117c9db8f1d8ae71fc85c16999d65",
    productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B00BW6LWO4&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=medi0513-20',
    header : 'Canon T5i',
    body : 'The T5i is the usual starting DSLR for most YouTubers. It has a full 180 viewfinder that allows you to film yourself. Its easier to use than most other DSLRs, while also being more durable than most. The image quality is top-notch for the price.'
  }

  const basicTripod = {
    reviewVideo1 : 'AsFp-71l-d4',
    reviewThumb1 : 'basic-tripod-review-1.jpg',
    reviewVideo2 : 'XiDyjCiaMd8',
    reviewThumb2 :  'basic-tripod-review-2.jpg',
    affiliateLink : "https://www.amazon.com/AmazonBasics-60-Inch-Lightweight-Tripod-Bag/dp/B005KP473Q/ref=as_li_ss_il?ie=UTF8&qid=1475617056&sr=8-1&keywords=amazon+basics+tripod&linkCode=li2&tag=medi0513-20&linkId=c361987121b472f660391290438e57e0",
    productImg : "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B005KP473Q&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=medi0513-20",
    header : 'Amazon Basics Tripod',
    body : "This is the best basic tripod. It is sturdy enough to hold most DSLRs including the T5i. It's incredible more durable than comparable tripods."
  }

  const basicLavalier = {
    reviewVideo1 : 'yYSQeGVveh4',
    reviewThumb1 : 'begin-lavalier-1.jpg',
    reviewVideo2 : 'o22pEErv11I',
    reviewThumb2 : 'begin-lavalier-2.jpg',
    affiliateLink : 'http://amzn.to/2dpEsxx',
    productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00H4I5574&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
    header : 'Vidpro XM-L Wired Lavalier microphone',
    body : "A lavalier microphone is your best bet when filming in an acoustic room or filming outdoors when there's wind. The lavalier significantly reduces ambient sounds, while usually being the most affordable option as well. The reason why lavaliers will record better than any other microphone at the same price range is because lavaliers are so close to a speaker's mouth which hellp with recording quality sound."
  }

  const rodeShotgun = {
    reviewVideo1 : 'HM-dTyTeCes',
    reviewThumb1 : 'rode-review-1.jpg',
    reviewVideo2 : '6JhD4D6N2sE',
    reviewThumb2 : 'rode-review-2.jpg',
    affiliateLink : 'http://amzn.to/2dHTLBq',
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
    affiliateLink : 'http://amzn.to/2dqIKm6',
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

const gh4 = {
  reviewVideo1 : 'HDEIHDSj8gs',
  reviewThumb1 : 'gh4-1.jpg',
  reviewVideo2 : 'gxGekOHEPuc',
  reviewThumb2 : 'gh4-2.jpg',
  affiliateLink : 'http://amzn.to/2dqKziX',
  productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LEEF6XC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
  header : 'GH4 Panasonic',
  body : 'The Panasonic GH4 is one of the first affordable 4K DSLR cameras. Panasonic designed this camera with photographers and videographers in mind.'
}

const magnusTripod = {
  reviewVideo1 : '1f831LREqho',
  reviewThumb1 : 'magnus-review-1.jpg',
  reviewVideo2 : 'EqUzdoOKEI4',
  reviewThumb2 : 'magnus-review-2.jpg',
  affiliateLink : 'http://amzn.to/2dcL3Gm',
  productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B005GMWNY8&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=medi0513-20',
  header : 'Magnus Video Tripod with Fluid Head',
  body : 'A fluid tripod head pans much smother than regular tripod heads. This helps with capturing a smooth shot. The magnus tripod head is the most affordable fluid tripod head, providing great value for the quality'
}

const soundFoam = {
  reviewVideo1 : '_tRun_u4EpA',
  reviewThumb1 : 'foam-review-1.jpg',
  reviewVideo2 : 'ihckzg513Ww',
  reviewThumb2 : 'foam-review-2.jpg',
  affiliateLink : 'http://amzn.to/2dY93go',
  productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00TP7C9YY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
  header : 'Sound Proofing Foam',
  body :"If you record your videos indoors, you'll probably notice a lot of reverb in your sound. This is especially annoying if you have hardwood or tile flooring. Buying a better microphone isn't going to help. The best solution is to soundproof your room with some acoustic foam."
}

this.intermediateArray = [
  gh4,
  magnusTripod,
  basicLavalier,
  rodeShotgun,
  limoStudio,
  soundFoam
]

const ravelliTripod = {
  reviewVideo1 : 'TTu08dtgLWA',
  reviewThumb1 : 'ravelli-review-1.jpg',
  reviewVideo2 : 'bDz1wUlT6uY',
  reviewThumb2 : 'ravelli-review-2.jpg',
  affiliateLink : 'http://amzn.to/2dcOPQ6',
  productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00139W0XM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
  header : 'Ravelli 75mm Tripod with Fluid Head',
  body : "Fluid head tripod is an essiential if you want smooth panning shots. With non-fluid tripod heads, you'll have a lot of jarring, skipping and uneven resistance which will mess up a shot. This one by Ravelli is the #1 fluid head tripod on Amazon at a reasonable price"
}

const saramonicLavalier = {
  reviewVideo1 : 'ppLPyyPGWPE',
  reviewThumb1 : 'saramonic-review-1.jpg',
  reviewVideo2 : 'OU0a2uSOtPQ',
  reviewThumb2 : 'saramonic-review-2.jpg',
  affiliateLink : 'http://amzn.to/2dE7g5D',
  productImg : '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01AYDN004&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0513-20',
  header : 'Saramonic Lavalier Microphone',
  body : "lavalier microphone is your best bet when filming in an acoustic room or filming outdoors when there's wind. The lavalier significantly reduces ambient sounds, while usually being the most affordable option as well. The reason why lavaliers will record better than any" +
    "other microphone at the same price range is because lavaliers are so close to a speaker's mouth which hellp with recording quality sound."
}

const studioPro = {
  reviewVideo1 : 'WNcZ-kD0cBUx',
  reviewThumb1 : 'studioPRO-1.jpg',
  reviewVideo2 : 'Sp_8USihL9w',
  reviewThumb2 : 'studioPRO-2.jpg',
  affiliateLink : 'http://amzn.to/2dpiSE9',
  productImg : "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FG0LQJI&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=medi0eb7-20",
  header : 'StudioPRO Double S-900DN',
  body : 'Exact control over lighting is especially important when thousands of people are watching your videos. These lights are more expensive than typically lighting, but since their dimmable, you can have the exact amount of lighting you want on your subject.'
}

this.advanceArray = [
  gh4,
  ravelliTripod,
  saramonicLavalier,
  rodeShotgun,
  studioPro,
  soundFoam
]

})
