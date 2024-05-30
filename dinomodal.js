const dinoInfo = {
    brachiosaurus: {
      imageSrc: 'brachiosaurus pop.jpg',
      title: 'Brachiosaurus',
      description: 'The Brachiosaurus: Thanks to its long neck, Brachiosaurus can feed on leaves from trees up to 12 metres high, eating up to 400kg of vegetation every day.'
    },
    triceratops: {
      imageSrc: 'triceratops pop.jpg',
      title: 'Triceratops',
      description: 'The Triceratops: Notable for its large frill and the three horns on its head – which give rise to its name, which translates to ‘three-horned face.'
    },
    stegosaurus: {
      imageSrc: 'stegosaurus pop.jpg',
      title: 'Stegosaurus',
      description: 'The Stegosaurus: The long spikes on its tail allow it to lash out at attackers, although the back plates are believed to be for display when attracting a mate.'
    },
    trex: {
      imageSrc: 'trex pop.jpg',
      title: 'T-Rex',
      description: 'The T-Rex: Tyrannosaurus rex was the apex predator of its time, with the most powerful jaw known to science and rows of large, serrated teeth.'
    },
    velociraptor: {
      imageSrc: 'velociraptor pop.jpg',
      title: 'Velociraptor',
      description: 'The Velociraptor: Velociraptor’s reputation as one of the most terrifying dinosaurs comes not from its size – at just 4m in length – but its ferocity and intelligence.'
    },
    carnotaurus: {
      imageSrc: 'carnotaurus pop.jpg',
      title: 'Carnotaurus',
      description: 'The Carnotaurus: The combination of its unique horns and flesh-ripping teeth gave Carnotaurus its name, meaning ‘meat-eating bull’.'
    },
    pteranodon: {
      imageSrc: 'pteranodon pop.jpg',
      title: 'Pteranodon',
      description: 'The Pteranodon: Although its diet consists largely of fish, Pteranodon does not have teeth, chewing its prey with its beak.'
    },
    dimorphodon: {
      imageSrc: 'dimorphodon pop.jpg',
      title: 'Dimorphodon',
      description: 'The Dimorphodon: The pterosaur Dimorphodon is notable for the size of its head, which is much bigger than found in similar pterosaurs such as Pterodactylus.'
    },
    tapejara: {
      imageSrc: 'tapejara pop.jpg',
      title: 'Tapejara',
      description: 'The Tapejara: Easily recognised thanks to its unique appearance, Tapejara is a genus of Pterosaur native to Brazil with a brightly coloured crest on top of its head.'
    },
    kronosaurus: {
      imageSrc: 'kronosaurus pop.jpg',
      title: 'Kronosaurus',
      description: 'The Kronosaurus: Kronosaurus is a marine reptile from the pliosaur family dating back to the Early Cretaceous period and takes its name from the Greek god Kronos.'
    },
    ichthyosaurus: {
      imageSrc: 'ichthyosaurus pop.jpg',
      title: 'Ichthyosaurus',
      description: 'The Ichthyosaurus: Its paddle-like limbs and streamlined body allow it to move at great speed through water, catching its prey in its long, thin snout.'
    },
    attenborosaurus: {
      imageSrc: 'attenborosaurus pop.jpg',
      title: 'Attenborosaurus',
      description: 'The Attenborosaurus: Named after the esteemed British natural historian David Attenborough, Attenborosaurus is a genus of pliosaurid that grows up to 6.4m in length.'
    }
  };
  
  function openModal(dino) {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
  
    const { imageSrc, title, description } = dinoInfo[dino];
  
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  function scrollGallery(direction) {
    const gallery = document.querySelector(".gallery1");
    const scrollAmount = 350; 
    const scrollDirection = direction === 1 ? "left" : "right";
    gallery.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
  