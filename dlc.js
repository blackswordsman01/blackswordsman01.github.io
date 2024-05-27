const data = [
  {
    id: 1,
    image: "deluxe.jpg",
    heading: "Deluxe Upgrade Pack",
    info: "The Jurassic World Evolution 2: Deluxe Upgrade Pack offers five impressive prehistoric creatures, including new marine and flying reptiles. Additionally, it includes six distinctive guest building signs and three thrilling vehicle skins inspired by the Dinosaur Protection Group, which can be used across your Ranger Team, Capture Team, and Mobile Vet Unit in Challenge and Sandbox modes.",
  },
  {
    id: 2,
    image: "early cretaceous.jpg",
    heading: "Early Cretaceous Pack",
    info: "Revitalize your parks and explore a magnificent collection of Cretaceous creatures with the Jurassic World Evolution 2: Early Cretaceous Pack. Enhance your park with four exciting prehistoric species, including terrestrial dinosaurs, as well as marine and flying reptiles. These magnificent creatures come to life with enhanced behaviors, engaging with each other, vying for dominance, and responding intelligently to their environment.",
  },
  {
    id: 3,
    image: "camp cretaceous.jpg",
    heading: "Camp Cretaceous Pack",
    info: "Introducing an array of exciting new prehistoric creatures through the Jurassic World Evolution 2: Camp Cretaceous Dinosaur Pack. Inspired by the popular Netflix series Jurassic World: Camp Cretaceous and brought to you by Universal Pictures, Amblin Entertainment, and DreamWorks Animation, this DLC includes two brand-new dinosaurs, two fresh variants for existing species, and eight captivating skins to enhance players park-building experiences.",
  },
  {
    id: 4,
    image: "dominion biosyn.jpg",
    heading: "Dominion Biosyn Expansion",
    info: "The latest DLC expansion for Jurassic World Evolution 2 introduces an expansive campaign influenced by the storyline of Jurassic World Dominion. Collaborate with renowned figures such as Claire Dearing, Dr. Alan Grant, and Dr. Ellie Sattler. Additionally, encounter a variety of new dinosaur species, including the long-awaited feathered dinosaurs. Engage in the fresh Chaos Theory scenario inspired by Jurassic World Dominion, discover innovative gameplay elements, and embark on thrilling adventures.",
  },
  {
    id: 5,
    image: "late cretaceous.jpg",
    heading: "Late Cretaceous Pack",
    info: "Introduce four breathtaking new ancient creatures to your parks with Jurassic World Evolution 2: Late Cretaceous Pack. Drawing inspiration from the intriguing Late Cretaceous era, this pack features four mesmerizing species that inhabited the earth, oceans, and skies over 65 million years ago. From majestic flying predators to colossal land-dwellers, experience the wonders of prehistoric life in your parks.",
  },
  {
    id: 6,
    image: "malta.jpg",
    heading: "Dominion Malta Expansion",
    info: "Before the thrilling events depicted in Universal Pictures and Amblin Entertainment’s Jurassic World Dominion, players will embark on an adventure in the Mediterranean, overseeing multiple dinosaur facilities across three distinct locations. Explore breathtaking new prehistoric creatures, three additional islands, intricately designed structures inspired by Malta, and a fresh campaign in Jurassic World Evolution 2: Dominion Malta Expansion.",
  },
  {
    id: 7,
    image: "feathered.jpg",
    heading: "Feathered Species Pack",
    info: "Enhance your Jurassic World adventure with the remarkable Jurassic World Evolution 2: Feathered Species Pack. This expansion introduces four stunning prehistoric creatures, including three terrestrial dinosaurs and one flying reptile, all adorned with remarkable plumage. From thick coverings to delicate coats, these new additions boast captivating feathered features. Transform your park in unprecedented ways and provide your visitors with an unforgettable experience thanks to these mesmerizing feathered creatures.",
  },
  {
    id: 8,
    image: "marine.jpg",
    heading: "Prehistoric Marine Species Pack",
    info: "Explore the depths of the ancient past and encounter four novel marine species in Jurassic World Evolution 2: Prehistoric Marine Species Pack. Test your skills in park management as you accommodate peaceful behemoths, ancient reptiles, and formidable armored predators in your aquatic habitats. These stunning new creatures promise to provide your visitors with an unforgettable subaquatic adventure.",
  },
  {
    id: 9,
    image: "predator.jpg",
    heading: "Cretaceous Predator Pack",
    info: "Bring four formidable new carnivores into your parks with Jurassic World Evolution 2: Cretaceous Predator Pack. Take charge of these impressive dinosaurs as they vie for supremacy in your parks and hunt for their next prey.",
  },
  {
    id: 10,
    image: "secret.jpg",
    heading: "Secret Species Pack",
    info: "Presenting four novel hybrid dinosaurs crafted through bioengineering in your parks with Jurassic World Evolution 2: Secret Species Pack. These remarkable newcomers are more vibrant and intricately designed than ever, offering your visitors an unparalleled and unforgettable encounter. Witness the breathtaking new species, featuring beloved bioluminescent variants, which transform the night into a mesmerizing spectacle.",
  },
  {
    id: 11,
    image: "manager.jpg",
    heading: "Park Managers Collection Pack",
    info: "Explore an array of famous creatures with the Jurassic World Evolution 2: Park Managers’ Collection Pack. Encounter legendary behemoths of the seas and skies, as well as the smallest of ancient beings to roam the planet!",
  },
];

function showPopup(id) {
  const item = data.find((d) => d.id === id);
  document.getElementById("popup-image").src = item.image;
  document.getElementById("popup-heading").innerText = item.heading;
  document.getElementById("popup-info").innerText = item.info;
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
