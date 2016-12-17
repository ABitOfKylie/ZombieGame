 // Zombie1 line 3-182, zombie2 183 - 365, zombie3 366-545, zombie4 546 --
  module.exports ={
  zombie1: {
    name: "SwampZombie",
    description: "He's falling apart but he still has room to love",
    image: "url",
    locationName: "Swamp",
    locationImage: "url",
    questions: [
      {
        question: "Well, awrite dere. I’m surprised to see someone of your… gender walking around here. Most are too screamish to go into da swamp. Ah! Where are my manners? Please excuse me. I’m Jago. Who might you be?",
          responses: [
          {
            response: "[Player name], a pleasure to meet you.",
            value: 10
          }, {
            response: "Not that you deserve to know but it’s [Player name].",
            value: 5
          }, {
            response: "I don’t tell swamp creeps my name.",
            value: -5
          }, {
            response: "Rot off, moss brain!",
            value: -10
          }
        ]
      }, {
        question: "Ah well it’s nice to meet you, heh. I don’t get many visitors here in my swamp.",
        responses: [
          {
            response: "I can’t imagine why. The fireflies are breathtaking this time of the year.",
            value: 10
          }, {
            response: "Maybe they just don’t have a good reason to visit.",
            value: 5
          }, {
            response: "Yeah I can see why...",
            value: -5
          }, {
            response: "I don’t plan on staying long. I’m just passing through.",
            value: -10
          }
        ]
      }, {
        question: "Maybe you can stay a while. At least for da night. You can get lost real easy around here, especially in da dark.",
        responses: [
          {
            response: "Hm, I don’t think I would mind getting lost in the dark with you.",
            value: 10
          }, {
            response: "Well, I suppose I could. I really don’t want to get lost",
            value: 5
          }, {
            response: "Thanks but no thanks. I got places to be.",
            value: -5
          }, {
            response: "Didn’t you hear me, you freak? I’m not staying here",
            value: -10
          }
        ]
      }, {
        question: "Heh-eh. Come along dawlin. I know da perfect spot for us to stay da night all nice and safe like.",
        responses: [
          {
            response: "I feel safer just being next to you.",
            value: 10
          }, {
            response: "Alright but keep your hands...hand to yourself. I’m not into “touching”.",
            value: 5
          }, {
            response: "Did you just ignore me?",
            value: -5
          }, {
            response: "I’m not going anywhere with you!!",
            value: -10
          }
        ]
      }, {
        question: "It’s not too far thankfully. Maybe on da way dere we’ll find something to eat.",
        responses: [
          {
            response: "Oh, if I had known I was going out I would have dressed up for it",
            value: 10
          }, {
            response: "That would be nice. It’s been awhile since I ate anything",
            value: 5
          }, {
            response: "Are you even hearing what I am saying?",
            value: -5
          }, {
            response: "Let go of me!! ",
            value: -10
          }
        ]
      }, {
        question: "While we walk why don’t we talk about ourselves? You go first.",
        responses: [
          {
            response: "Well I don’t know what I really can say. I’m just a normal gal trying to get where I’m going.",
            value: 10
          }, {
            response: "I’d rather you go first.",
            value: 5
          }, {
            response: "If I have this stupid conversation with you will you leave me alone?",
            value: -5
          }, {
            response: "No! ",
            value: -10
          }
        ]
      }, {
        question: "I see, well there’s not much to me either. Not much memory of being human before getting my hand bitten off heh. Been here ever since?",
        responses: [
          {
            response: "Yeah, it’s been hard on us all since the outbreak",
            value: 10
          }, {
            response: "Sounds pretty lonely if you ask me",
            value: 5
          }, {
            response: "Wow, yeah real sad and shit. Can I go now?",
            value: -5
          }, {
            response: "Why are you tell me this?! Just let me go!",
            value: -10
          }
        ]
      }, {
        question: "Ah! Here we are, my special home away from home. How do you like it?",
        responses: [
          {
            response: "It’s amazing!",
            value: 10
          }, {
            response: "Whoa… ",
            value: 5
          }, {
            response: "Yeah great. Now can I go?",
            value: -5
          }, {
            response: "You dragged me out here for some stupid light bugs?!",
            value: -10
          }
        ]
      }, {
        question: "I’m glad I could share dis with you. It’s nice to have someone here finally.",
        responses: [
          {
            response: "I’m glad I came too",
            value: 10
          }, {
            response: "Um… yeah… I guess",
            value: 5
          }, {
            response: "Yeah, will enjoy it while you can I guess",
            value: -5
          }, {
            response: "I’m not here of free will you know",
            value: -10
          }
        ]
      }, {
        question: "What would you think of staying here? With me?",
        responses: [
          {
            response: "I think I would like that every much Jago",
            value: 10
          }, {
            response: "I’m… not sure. That’s a big decision for me",
            value: 5
          }, {
            response: "Stop looking at me like that. It’s creepy",
            value: -5
          }, {
            response: "Over your re-dead body creep!",
            value: -10
          }
        ]
      }
    ]
  },
 zombie2: {
    name: "SnowZombie",
    description: "",
    image: "url",
    locationName: "Snow",
    locationImage: "url",
    questions: [
      {
        question: "Graaawwrrr!!!",
          responses: [
          {
            response: "And a big hello to you sir.",
            value: 10
          }, {
            response: "Whoa! Don’t scare me like that!",
            value: 5
          }, {
            response: "Didn’t your mother ever teach you manners?",
            value: -5
          }, {
            response: "Grraarrrr!!!",
            value: -10
          }
        ]

      }, 
      	{
        question: "Eerrrrrrgg…",
        responses: [
          {
            response: "A village? Sorry I haven’t seen anyone for miles, well aside for you.",
            value: 10
          }, {
            response: "Um… are you okay?",
            value: 5
          }, {
            response: "Okay then...",
            value: -5
          }, {
            response: "Grrrrr-og",
            value: -10
          }
        ]
      }, 
      {
        question: "Rraaaawg",
        responses: [
          {
            response: "Hey don’t worry, I’m sure we can figure something out",
            value: 10
          }, {
            response: "Is that a no?",
            value: 5
          }, {
            response: "Can’t you say actual words or anything?",
            value: -5
          }, {
            response: "Rrrrroooooggg",
            value: -10
          }
        ]
      }, {
        question: "Ooongk",
        responses: [
          {
            response: "Hey, I know. Why don’t you tell me how you got lost.",
            value: 10
          }, {
            response: "Um… okay.. Um.. well. I’m not really sure what to do at this point. Sorry!",
            value: 5
          }, {
            response: "Look, are you going to have a conversation with me or not?",
            value: -5
          }, {
            response: "ROOAAAR",
            value: -10
          }
        ]
      }, {
        question: "Rrrrooorrrggg",
        responses: [
          {
            response: "What?! The villagers attacked you for no good reason, trapped you in a box and dumped you in the middle of nowhere?! Those animals!",
            value: 10
          }, {
            response: "Oh! I know! .. no wait… I don’t. Eh… Give me a moment to think",
            value: 5
          }, {
            response: "Fine, don’t act civilized. Jerk",
            value: -5
          }, {
            response: "Errg",
            value: -10
          }
        ]
      }, {
        question: "Ergerg",
        responses: [
          {
            response: "Oh, you big flirt. You’re just saying that because I'm the only girl around",
            value: 10
          }, {
            response: "Hey, hey, don’t look so upset. Let’s just hang out for a little bit okay?",
            value: 5
          }, {
            response: "I would ask you how to get to the nearest outpost but... yeah.",
            value: -5
          }, {
            response: "Geergnnn",
            value: -10
          }
        ]
      }, {
        question: "Grroog",
        responses: [
          {
            response: "Oh, you big flirt. You’re just saying that because I'm the only girl around",
            value: 10
          }, {
            response: "Heh, you’re pretty cute, you know that?",
            value: 5
          }, {
            response: "Well… this is awkward",
            value: -5
          }, {
            response: "Raarrg",
            value: -10
          }
        ]
      }, {
        question: "Rrreeeeg",
        responses: [
          {
            response: "Well, heehee, I think you’re pretty cute yourself",
            value: 10
          }, {
            response: "Aww, I could just eat you up",
            value: 5
          }, {
            response: "Umm… I should probably get going ",
            value: -5
          }, {
            response: "Grrrrr!!",
            value: -10
          }
        ]
      }, {
        question: "Rooog",
        responses: [
          {
            response: "Oh! Planning your revenge sounds great!",
            value: 10
          }, {
            response: "Hey! I think I’m starting to understand you! ",
            value: 5
          }, {
            response: "Yup… so… I’m leaving now",
            value: -5
          }, {
            response: "Baarrg!",
            value: -10
          }
        ]
      }, {
        question: "Ergwerg",
        responses: [
          {
            response: "I love you too",
            value: 10
          }, {
            response: "Well… almost. Heh, but I’ll get there I guess",
            value: 5
          }, {
            response: "Okay. Bye",
            value: -5
          }, {
            response: "Blarg!",
            value: -10
          }
        ]
      }
  
    ]
  }
};
