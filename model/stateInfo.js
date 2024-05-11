const funFacts = [
  {
    stateCode: "KS",
    funfacts: [
      "The state is known as the 'Sunflower State' because of the vast fields of sunflowers that grow there.",
      "Kansas is famous for being the birthplace of the iconic character Dorothy from 'The Wizard of Oz.'",
      "It is home to the largest ball of twine in the world, located in Cawker City.",
      "Kansas City, Kansas, is often confused with Kansas City, Missouri, as they share a name and are part of the same metropolitan area.",
      "The state is known for its role in the cattle industry and is often referred to as 'Cowtown.'"
    ]
  },
  {
    stateCode: "MO",
    funfacts: [
      "Missouri is known as the 'Show Me State,' a phrase that reflects the residents' practical and skeptical nature.",
      "The Gateway Arch in St. Louis is the tallest man-made monument in the United States.",
      "Missouri is home to the world's largest beer producer, Anheuser-Busch, located in St. Louis.",
      "The state has more than 6,000 caves, including the famous Meramec Caverns.",
      "Missouri was where the famous explorers Lewis and Clark began their historic expedition."
    ]
  },
  {
    stateCode: "OK",
    funfacts: [
      "Oklahoma's state capital, Oklahoma City, is home to the National Cowboy & Western Heritage Museum.",
      "The state has the largest population of Native Americans in the United States.",
      "Oklahoma's official state meal includes chicken-fried steak, barbecue pork, fried okra, and more.",
      "The world's first parking meter was installed in Oklahoma City in 1935.",
      "The musical 'Oklahoma!' is named after the state and is set in the Oklahoma Territory."
    ]
  },
  {
    stateCode: "NE",
    funfacts: [
      "Nebraska's official state nickname is the 'Cornhusker State,' reflecting its agricultural heritage.",
      "The state is home to the world's largest indoor rainforest, located at the Omaha Henry Doorly Zoo & Aquarium.",
      "Kool-Aid was invented in Hastings, Nebraska, by Edwin Perkins in 1927.",
      "Nebraska's Chimney Rock was a landmark on the Oregon Trail and is depicted on the state's commemorative quarter.",
      "The Sandhills region in Nebraska is home to the largest hand-planted forest in the United States, the Nebraska National Forest."
    ]
  },
  {
    stateCode: "CO",
    funfacts: [
      "Colorado is nicknamed the 'Centennial State' because it became a state in the centennial year of the United States (1876).",
      "The state is known for its majestic Rocky Mountains, including Pikes Peak and the Maroon Bells.",
      "Colorado is one of the few states in the U.S. where you can legally ski, hike, and golf all in the same day.",
      "Denver, the state capital, is home to the largest city park system in the nation.",
      "Colorado is famous for its craft breweries, outdoor recreation, and vibrant arts and culture scene."
    ]
  },
  {
    stateCode: "CA",
    funfacts: [
      "California is known for its diverse geography, including beaches, mountains, deserts, and forests.",
      "The state is the world's fifth-largest economy, with industries such as technology, entertainment, and agriculture driving its economy.",
      "California's Redwood National and State Parks are home to the tallest trees on Earth, the coast redwoods.",
      "The Golden Gate Bridge in San Francisco is one of the most iconic bridges in the world.",
      "Hollywood, located in Los Angeles, is the entertainment capital of the world and home to the famous Hollywood Walk of Fame."
    ]
  },
  {
    stateCode: "NY",
    funfacts: [
      "New York is home to the most populous city in the United States, New York City.",
      "The state is known for its cultural landmarks such as Times Square, Central Park, and the Statue of Liberty.",
      "New York City's Broadway is famous for its theaters and musical productions.",
      "The state has a diverse economy, with industries including finance, media, fashion, and technology.",
      "The Adirondack Park in Upstate New York is the largest publicly protected area in the contiguous United States."
    ]
  },
  {
    stateCode: "FL",
    funfacts: [
      "Florida is known as the 'Sunshine State' for its warm climate and sunny weather.",
      "The state is famous for its theme parks, including Walt Disney World Resort, Universal Studios, and SeaWorld.",
      "Florida's Everglades National Park is the largest tropical wilderness of any kind in the United States.",
      "The Kennedy Space Center in Florida is where NASA launches spacecraft, including the Apollo missions to the moon.",
      "Miami, located in Florida, is known for its vibrant nightlife, beaches, and cultural diversity."
    ]
  },
  {
    stateCode: "TX",
    funfacts: [
      "Texas is the second-largest state in the United States, both in area and population.",
      "The state is known for its cowboy culture, oil industry, and large ranches.",
      "Texas is home to the NASA Johnson Space Center, where astronauts are trained and missions are managed.",
      "The Alamo in San Antonio is a historic site where a pivotal battle for Texas independence took place.",
      "Austin, the state capital, is known for its live music scene, technology companies, and outdoor activities."
    ]
  },
  {
    stateCode: "IL",
    funfacts: [
      "Illinois is known as the 'Land of Lincoln' because it is where Abraham Lincoln lived before becoming president.",
      "Chicago, the largest city in Illinois, is known for its architecture, museums, and deep-dish pizza.",
      "The state is a major transportation hub, with Chicago's O'Hare International Airport being one of the busiest airports in the world.",
      "Illinois is a leading agricultural state, producing corn, soybeans, and livestock.",
      "The University of Illinois at Urbana-Champaign is a renowned research institution."
    ]
  },
  {
    stateCode: "AL",
    funfacts: []
  },
  {
    stateCode: "AK",
    funfacts: []
  },
  {
    stateCode: "AZ",
    funfacts: []
  },
  {
    stateCode: "AR",
    funfacts: []
  },
  {
    stateCode: "CT",
    funfacts: []
  },
  {
    stateCode: "DE",
    funfacts: []
  },
  {
    stateCode: "GA",
    funfacts: []
  },
  {
    stateCode: "HI",
    funfacts: []
  },
  {
    stateCode: "ID",
    funfacts: []
  },
  {
    stateCode: "IN",
    funfacts: []
  },
  {
    stateCode: "IA",
    funfacts: []
  },
  {
    stateCode: "KY",
    funfacts: []
  },
  {
    stateCode: "LA",
    funfacts: []
  },
  {
    stateCode: "ME",
    funfacts: []
  },
  {
    stateCode: "MD",
    funfacts: []
  },
  {
    stateCode: "MA",
    funfacts: []
  },
  {
    stateCode: "MI",
    funfacts: []
  },
  {
    stateCode: "MN",
    funfacts: []
  },
  {
    stateCode: "MS",
    funfacts: []
  },
  {
    stateCode: "MT",
    funfacts: []
  },
  {
    stateCode: "NV",
    funfacts: []
  },
  {
    stateCode: "NH",
    funfacts: []
  },
  {
    stateCode: "NJ",
    funfacts: []
  },
  {
    stateCode: "NM",
    funfacts: []
  },
  {
    stateCode: "NC",
    funfacts: []
  },
  {
    stateCode: "ND",
    funfacts: []
  },
  {
    stateCode: "OH",
    funfacts: []
  },
  {
    stateCode: "OR",
    funfacts: []
  },
  
  {
    stateCode: "PA",
    funfacts: []
  },
  
  {
    stateCode: "RI",
    funfacts: []
  },
  
  {
    stateCode: "SC",
    funfacts: []
  },
  
  {
    stateCode: "SD",
    funfacts: []
  },
  
  {
    stateCode: "TN",
    funfacts: []
  },
  
  {
    stateCode: "UT",
    funfacts: []
  },
  
  {
    stateCode: "VT",
    funfacts: []
  },
  
  {
    stateCode: "VA",
    funfacts: []
  },
  
  {
    stateCode: "WA",
    funfacts: []
  },
  
  {
    stateCode: "WV",
    funfacts: []
  },
  
  {
    stateCode: "WI",
    funfacts: []
  },
  
  {
    stateCode: "WY",
    funfacts: []
  }
];

module.exports = funFacts;