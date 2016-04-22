(function () {
	'use strict';
	angular
		.module('core.monsterCardLibrary')
		.factory('monsterCardLibrary', monsterCardLibrary);

	monsterCardLibrary.$inject = ['card', 'deck'];

	function monsterCardLibrary(card, deck) {
		var factory = this;
		var cardService = card;
		var deckService = deck;
		factory.pullRandomCard = pullRandomCard;
		factory.pullSpecificCard = pullSpecificCard;
		factory.resetLibrary = resetLibrary;
		factory.buildLibrary = buildLibrary;
		function pullRandomCard(monsterName, type, aiLevel) {
			var cardPool;
			var drawnPool;
			if (type == 'AI') {
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].drawn[type][aiLevel];
			} else {
				cardPool = this.library[monsterName][type];
				drawnPool = this.library[monsterName].drawn[type];
			}
			var newCard = cardPool.pullRandomCard();
			drawnPool.addCard(newCard);
			return newCard;
		}

		function pullSpecificCard(monsterName, type, aiLevel, cardName) {
			var cardPool;
			var drawnPool;
			if (type == 'AI') {
				cardPool = this.library[monsterName][type][aiLevel];
				drawnPool = this.library[monsterName].drawn[type][aiLevel];
			} else {
				cardPool = this.library[monsterName][type];
				drawnPool = this.library[monsterName].drawn[type];
			}
			var newCard = cardPool.pullSpecificCard(cardName);
			drawnPool.addCard(newCard);
			return newCard;
		}

		function resetLibrary() {
			this.buildLibrary();
		}

		function buildLibrary() {
			for (var monsterName in this.libraryDefinition) {
				this.library[monsterName] = {};
				this.library[monsterName].drawn = {};
				this.library[monsterName]['AI'] = {};
				this.library[monsterName].drawn['AI'] = {};
				this.library[monsterName]['HitLocation'] = {};
				this.library[monsterName].drawn['HitLocation'] = {};
				this.library[monsterName]['Hunt'] = {};
				this.library[monsterName].drawn['Hunt'] = {};
				this.library[monsterName]['Resource'] = {};
				this.library[monsterName].drawn['Resource'] = {};

				//ai Decks
				for (var aiLevel in this.libraryDefinition[monsterName]['AI']) {
					this.library[monsterName]['AI'][aiLevel] = deckService.get('AI');
					this.library[monsterName].drawn['AI'][aiLevel] = deckService.get('Drawn AI');
					for (var cardNameIndex in this.libraryDefinition[monsterName]['AI'][aiLevel]) {
						var cardName = this.libraryDefinition[monsterName]['AI'][aiLevel][cardNameIndex];
						this.library[monsterName]['AI'][aiLevel].addCard( cardService.get(cardName, monsterName, 'AI', aiLevel) );
					}
				}

				//Hit Location Decks
				this.library[monsterName].drawn['HitLocation'] = deckService.get('Drawn HitLocation');
				this.library[monsterName]['HitLocation'] = deckService.get('HitLocation');
				for (var cardNameIndex in this.libraryDefinition[monsterName]['HitLocation']) {
					var cardName = this.libraryDefinition[monsterName]['HitLocation'][cardNameIndex];
					this.library[monsterName]['HitLocation'].addCard( cardService.get(cardName, monsterName, 'HitLocation') );
				}

				//Hunt Decks
				this.library[monsterName].drawn['Hunt'] = deckService.get('Drawn Hunt');
				this.library[monsterName]['Hunt'] = deckService.get('Hunt');
				for (var cardNameIndex in this.libraryDefinition[monsterName]['Hunt']) {
					var cardName = this.libraryDefinition[monsterName]['Hunt'][cardNameIndex];
					this.library[monsterName]['Hunt'].addCard( cardService.get(cardName, monsterName, 'Hunt') );
				}

				//Resource Decks
				this.library[monsterName].drawn['Resource'] = deckService.get('Drawn Resource');
				this.library[monsterName]['Resource'] = deckService.get('Resource');
				for (var cardNameIndex in this.libraryDefinition[monsterName]['Resource']) {
					var cardName = this.libraryDefinition[monsterName]['Resource'][cardNameIndex];
					this.library[monsterName]['Resource'].addCard( cardService.get(cardName, monsterName, 'Resource') );
				}
			}

		}

		factory.library = {};
		factory.libraryDefinition = {
			'Basic':{
				Hunt: [
					"Random Event",
					"Random Event",
					"Random Event",
					"Random Event",
					"Random Event",
					"Random Event",
					"Random Event",
					"Random Event",
				],
				Resource: [
					"???",
					"???",
					"Broken Lantern",
					"Broken Lantern",
					"Love Juice",
					"Love Juice",
					"Monster Bone",
					"Monster Bone",
					"Monster Bone",
					"Monster Bone",
					"Monster Hide",
					"Monster Hide",
					"Monster Hide",
					"Monster Hide",
					"Monster Hide",
					"Monster Hide",
					"Monster Hide",
					"Monster Organ",
					"Monster Organ",
					"Monster Organ",
					"Skull",
				],
			},
			'White Lion': {
				AI: {
					starter: [
						"Cunning",
						"Merciless",
						"White Lion",
						"White Lion Back",
						'Beast of Sorrow Back',
						'Great Golden Cat Back',
					],
					basic: [
						"Bat Around",
						"Chomp",
						"Claw",
						"Claw",
						"Combo Claw",
						"Grasp",
						"Grasp",
						"Power Swat",
						"Revenge",
						"Size Up",
						"Size Up",
						"Vicious Claw",
					],
					advanced: [
						"Alert",
						"Bloodthirsty",
						"Bloody Claw",
						"Enraged",
						"Ground Fighting",
						"Lick Wounds",
						"Maul",
						"Smart Cat",
						"Terrifying Roar",
					],
					legendary: [
						"Golden Eyes",
						"Vanish",
					],
				},
				HitLocation: [
					"Beast’s Back",
					"Beast’s Brow",
					"Beast’s Chest",
					"Beast’s Ear",
					"Beast’s Elbow",
					"Beast’s Femur",
					"Beast’s Flank",
					//"Beast’s Hand",
					"Beast’s Heel",
					"Beast’s Knee",
					"Beast’s Maw",
					"Beast’s Paw",
					"Beast’s Ribs",
					"Beast’s Scapular Deltoid",
					"Beast’s Tail",
					"Beast’s Temple",
					"Beast’s Tricep",
					"Clever Ploy",
					"Fleshy Gut",
					"Fuzzy Groin",
					"Glorious Mane",
					"Soft Belly",
					"Straining Neck",
				],
				Hunt: [
					"Aromatic Breeze",
					"Lion in Heat",
					"Lion’s Sculpture",
					"Marked Territory",
					"Prowling Lion",
					"Scratching Grounds",
					"Sea of Golden Grass",
					"White Lion Cub"
				],
				Resource: [
					"Curious Hand",
					"Eye of Cat",
					"Golden Whiskers",
					"Great Cat Bones",
					"Great Cat Bones",
					"Great Cat Bones",
					"Great Cat Bones",
					"Lion Claw",
					"Lion Claw",
					"Lion Claw",
					"Lion Tail",
					"Lion Testes",
					"Shimmering Mane",
					"Sinew",
					"Sinew",
					"White Fur",
					"White Fur",
					"White Fur",
					"White Fur",
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'Screaming Antelope': {
				AI: {
					starter: [
						"Diabolical",
						"Gobbled Up",
						"Hypermetabolism",
						"Trample",
					],
					basic: [
						"Back Kick",
						"Back Kick",
						"Bite",
						"Bite",
						"Bolt",
						"Chow Down",
						"Chow Down",
						"Gore",
						"Run Down",
						"Slam",
						"Stomp and Snort",
						"Stomp and Snort",
					],
					advanced: [
						"Buck",
						"Crush and Devour",
						"Great Kick",
						"Infested",
						"Lone Rampage",
						"Ram",
						"Ravenous",
						"Stomp",
					],
					legendary: [
						"In Heat",
						"Legendary Horns",
						"Skewer",
					],
				},
				HitLocation: [
					"Delicate Inverted Knee",
					"Ferocious Spasm",
					"Furry Tail",
					"Furry Throat",
					"Giant Mouth",
					"Giant Teeth",
					"Giant Tongue",
					"Gnarled Horns",
					"Palate",
					"Restless Back",
					"Restless Chest",
					"Restless Ear",
					"Restless Eye",
					"Restless Flank",
					"Restless Hoof",
					"Restless Inner Thigh",
					"Restless Muzzle",
					"Restless Rump",
					"Restless Shank",
					"Restless Shoulder",
					"Restless Tiny Hands",
					"Wailing Slide",
				],
				Hunt: [
					"Migration",
					"Carpet of Ticks",
					"Dead Antelope",
					"Devoured Grounds",
					"Grazing Field",
					"Skittish",
					"Stampede",
					"Teething",
					"Vomit Pile",
				],
				Resource: [
					"Beast Steak",
					"Beast Steak",
					"Bladder",
					"Large Flat Tooth",
					"Large Flat Tooth",
					"Muscly Gums",
					"Pelt",
					"Pelt",
					"Pelt",
					"Pelt",
					"Screaming Brain",
					"Shank Bone",
					"Shank Bone",
					"Shank Bone",
					"Shank Bone",
					"Spiral Horn",
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'Phoenix': {
				AI: {
					starter: [
						"Dreaded Decade",
						"Materialize",
						"Spiral Age",
						"Zeal",
					],
					basic: [
						"Ancient Stare",
						"Bored",
						"Chatter",
						"Haze",
						"Instant Wing Strike",
						"Left Wing Strike",
						"Peck",
						"Peck",
						"Pitying Sigh",
						"Pitying Sigh",
						"Pustule Cannon",
						"Right Wing Strike",
						"Wing Punch",
					],
					advanced: [
						"Analtorium",
						"Excrete",
						"Gouge And Feast",
						"Rancid Melon Stench",
						"Ripple",
						"The Difference Between Us",
						"Unspoken",
					],
					legendary: [
						"Deja Vu",
						"Life Pattern",
						"Predator's Aura",
						"Top of the Food Chain",
					],
				},
				HitLocation: [
					"Feathered Back",
					"Feathered Body",
					"Feathered Breast",
					"Feathered Buttocks",
					"Feathered Neck",
					"Feathered Wing",
					"Glorious Arm Pit",
					"Glorious Crest",
					"Glorious Eye",
					"Glorious Handed Feet",
					"Glorious Hands",
					"Glorious Head",
					"Glorious Primary Eyes",
					"Glorious Soft Belly",
					"Glorious Wing Claws",
					"Glorious Wing Sphincter",
					"Hard Beak",
					"Inner Face",
					"Soft Lower Gut",
					"Tail Feathers",
					"Time Stop",
					"Tiny Wing Hands",
				],
				Hunt: [
					"Bird Brained",
					"Fateful Feather",
					"Fertile Field",
					"Filth from the Sky",
					"Glimpse",
					"Recurring Nightmare",
					"Time Flows Backward",
					"Unmake",
					"Wind Tunnel",
				],
				Resource: [
					"Bird Beak",
					"Black Skull",
					"Hollow Wing Bones",
					"Hollow Wing Bones",
					"Hollow Wing Bones",
					"Muculent Droppings",
					"Muculent Droppings",
					"Muculent Droppings",
					"Phoenix Eye",
					"Phoenix Finger",
					"Phoenix Finger",
					"Phoenix Whisker",
					"Pustules",
					"Pustules",
					"Rainbow Droppings",
					"Shimmering Halo",
					"Small Feathers",
					"Small Feathers",
					"Small Feathers",
					"Small Hand Parasites",
					"Tail Feathers",
					"Tail Feathers",
					"Tail Feathers",
					"Wishbone",
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'Butcher': {
				AI: {
					starter: [
						'Berserker',
						'Dreaded Trophies',
						'Fast Target',
						'Frenzied Berserker',
						'Infectious Lunacy',
						'Invincible'
					],
					basic: [
						"Backhand",
						"Butcher's Roar",
						"Hack",
						"Hack",
						"Hew",
						"Hew",
						"Kick",
						"Kick",
						"Screaming",
						"Wild Carve",
						"Wild Carve",
					],
					advanced: [
						"Bite",
						"Bite",
						"Devour Lantern",
						"Double Hack",
						"Embrace the Pain",
						"Forbidden Light",
						"Gaze of Truth",
						"Hack City",
						"Lantern Frenzy",
						"Lantern Hunger",
					],
					legendary: [
					],
				},
				HitLocation: [
					"Armored Pig Shoulder",
					"Butcher's Mask",
					"Cleaver L",
					"Cleaver R",
					"Furious Bellow",
					"Furious Breastplate",
					"Furious Crown",
					"Furious Gauntlet",
					"Furious Greaves",
					"Furious Gut",
					"Furious Scrag",
					"Furious Shoulder",
					"Furious Vambraces",
					"Overpower",
					"Thick Cape",
				],
				Hunt: [
				],
				Resource: [
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'Kingsmen': {
				AI: {
					starter: [
						"Battle Tempo",
						"Kings Aura",
						"Kings Combat",
						"Out-fighting",
						"Silent Hymn",
						"Weak Spot",
					],
					basic: [
						"Axe",
						"Clang",
						"Cleave",
						"Cleave",
						"Coup de Grace",
						"Force Thrust",
						"Hammer",
						"Hook and Pull",
						"Hook and Pull",
						"Kings Grace",
						"Spear",
						"Spear",
						"Trip",
					],
					advanced: [
						"Kings Axe",
						"Kings Walk",
						"Kneel",
						"Lantern Mirage",
						"Lash Out",
						"Perfect Thrust",
						"Spinning Halberd",
					],
					legendary: [
						"Familiar Face",
					],
				},
				HitLocation: [
					"Acid Blood Discharge",
					"Axe Blade",
					"Battle Pressure",
					"Battle Pressure",
					"Battle Pressure",
					"Halberd Handle",
					"Halberd Spear",
					"Regal Back",
					"Regal Breastplate",
					"Regal Collar",
					"Regal Faceplate",
					"Regal Gauntlet",
					"Regal Greaves",
					"Regal Gutplate",
					"Regal Helm",
					"Regal Knees",
					"Regal Plume",
					"Regal Sabatons",
					"Regal Sheath",
					"Regal Skirt",
					"Regal Vambraces",
				],
				Hunt: [
				],
				Resource: [
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'The Hand': {
				AI: {
					starter: [
						"Applause",
						"Blue Lens - Open",
						"Blue Lens - Closed",
						"Ghost Step",
						"Green Lens - Open",
						"Green Lens - Closed",
						"Red Lens - Open",
						"Red Lens - Closed",
						"Impossible Eyes",
						"Respect",
						"Polarized Aura",
					],
					basic: [
						"Bullet Jabs",
						"Bullet Jabs",
						"Full-Powered Flick",
						"Line Up",
						"Liver Blow",
						"Liver Blow",
						"Rude Slap",
						"Soft Chuckle",
						"Take Your Best Shot",
						"Thunderbolt Right",
						"Thunderbolt Right",
					],
					advanced: [
						"Kings Palm",
						"Small Uppercut",
					],
					legendary: [
					],
				},
				HitLocation: [
					"Gilded Cuirass",
					"Exotic Bone Bracer",
					"Exotic Fur Collar",
					"Exotic Fur Girdle",
					"Exotic Poets Blouse",
					"Exotic Rib Plate",
					"Exotic Silk Cape",
					"Exotic Silk Pantaloons",
					"Full Speed",
					"Gilded Codpiece",
					"Gilded Face Visor",
					"Gilded Sabaton",
					"Gilded Spaulder",
					"Gilded Crown",
					"Handed Lantern",
					"Shadow Fabric Gloves",
					"Spine Saber Sheath",
				],
				Hunt: [
				],
				Resource: [
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
			'The Watcher': {
				AI: {
					starter: [
						"Audience",
						"Retinue",
						"Stolen Dreams",
						"Vapor of Nothingness",
						"Lantern Vortex",
					],
					basic: [
						"Biophoton Feast",
						"Exhale",
						"Harrow",
						"Harrow",
						"Inhale",
						"Liquefy",
						//"Mortify",
						"Petrify",
						"Purify",
						"Stupefy",
						"Throttle",
						"Voidwarp",
						"Vomit Lanterns",
					],
					advanced: [
					],
					legendary: [
					],
				},
				HitLocation: [
					"Black Out",
					"Blackened Lanterns",
					"Hydrostatic Fluids",
					"Hydrostatic Skeleton",
					"Inner Robes",
					"Outer Robes",
					"Tentacle Chains",
					"Tentacle Crown",
					"Void Corpus",
					"Void Epidermis",
					"Void Folds",
					"Void Ganglia",
					"Void Gastrodermis",
					"Void Hood",
					"Void Light",
					"Void Membrane",
					"Void Nerve Mask",
					"Void Nerve Net",
					"Void Nerve Ring",
					"Void Plexus",
					"Void Polyps",
					"Void Shroud",
					"Void Tentacles",
					"Void Toxin",
					"White Out",
				],
				Hunt: [
				],
				Resource: [
				],
				drawn: {
					AI: {
						starter: [],
						basic: [],
						advanced: [],
						legendary: [],
					},
					HitLocation: [],
					Hunt: [],
					Resource: []
				}
			},
		}
		factory.buildLibrary();
		return factory;
	}

})();