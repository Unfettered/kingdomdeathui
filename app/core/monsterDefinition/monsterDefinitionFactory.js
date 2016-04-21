(function () {
	'use strict';
	angular
		.module('core.monsterDefinition')
		.factory('monsterDefinition', monsterDefinition);

	monsterDefinition.$inject = ['card', 'monsterCardLibrary'];

	function monsterDefinition(card, monsterCardLibrary) {
		var factory = this;
		this.cardService = card;
		this.monsterCardLibrary = monsterCardLibrary;
		this.definitions = {
			'White Lion': {
				'Prologue': {
					huntSetup: null,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion Back', 'White Lion', 'AI', 'starter'),
						],
						required: [
							this.cardService.get('Chomp', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Size Up', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Power Swat', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Grasp', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Maul', 'White Lion', 'AI', 'advanced'),
							this.cardService.get('Terrifying Roar', 'White Lion', 'AI', 'advanced'),
							this.cardService.get('Enraged', 'White Lion', 'AI', 'advanced')
						],
						basic: 0,
						advanced: 0,
						legendary: 0,
						aiDeckCallBack: function (deck) {
							var claw = this.cardService.get('Claw', 'White Lion', 'AI', 'basic');
							deck.cards.unshift(claw);
							return deck;
						},
						cardService: this.cardService
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Paw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
							this.cardService.get("Straining Neck", 'White Lion', 'HitLocation'),
						],
						hitLocationDeckCallback: function (deck) {
							for (var i = 0; i < 3; i++) {
								var strangeHand = this.cardService.get("Strange Hand", 'White Lion', 'HitLocation');
								deck.cards.unshift(strangeHand);
							}
							return deck;
						},
						cardService: this.cardService
					},
				},
				'Level 1': {
					huntSetup: [
						'P',
						'S',
						'S',
						'B',
						'M',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion Back', 'White Lion', 'AI', 'starter'),
						],
						required: [],
						basic: 7,
						advanced: 3,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Paw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
							this.cardService.get("Straining Neck", 'White Lion', 'HitLocation'),
							this.cardService.get("Strange Hand", 'White Lion', 'HitLocation')
						]
					},
				},
				'Level 2': {
					huntSetup: [
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'M',
						'S',
						'S',
						'B',
						'B',
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion Back', 'White Lion', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Paw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
							this.cardService.get("Straining Neck", 'White Lion', 'HitLocation'),
							this.cardService.get("Strange Hand", 'White Lion', 'HitLocation')
						]
					},
				},
				'Level 3': {
					huntSetup: [
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'M'
					],
					attributes: {
						accuracy: 2,
						damage: 0,
						evasion: 0,
						luck: 1,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Merciless', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('White Lion Back', 'White Lion', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 9,
						legendary: 2
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
						]
					},
				},
				'Beast of Sorrow': {
					huntSetup: [
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'M'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Weak Spot', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Beast of Sorrow Back', 'White Lion', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 1
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Paw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
							this.cardService.get("Straining Neck", 'White Lion', 'HitLocation'),
							this.cardService.get("Strange Hand", 'White Lion', 'HitLocation')
						]
					},
				},
				'Great Golden Cat': {
					huntSetup: [
						'P',
						'S',
						'S',
						'B',
						'B',
						'B',
						'O',
						'B',
						'S',
						'S',
						'B',
						'B',
						'M'
					],
					life:15,
					attributes: {
						accuracy: 1,
						damage: 0,
						evasion: 0,
						luck: 1,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Merciless', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Golden Eyes', 'White Lion', 'AI', 'legendary'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('White Lion', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Great Golden Cat Back', 'White Lion', 'AI', 'starter'),
						],
						required: [
							this.cardService.get('Combo Claw', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Vicious Claw', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Power Swat', 'White Lion', 'AI', 'basic'),
							this.cardService.get('Bloody Claw', 'White Lion', 'AI', 'advanced'),
							this.cardService.get('Terrifying Roar', 'White Lion', 'AI', 'advanced'),
							this.cardService.get('Vanish', 'White Lion', 'AI', 'legendary'),
						],
						basic: 0,
						advanced: 0,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Beast’s Back", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Brow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Chest", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ear", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Elbow", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Femur", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Flank", 'White Lion', 'HitLocation'),
							//this.cardService.get("Beast’s Hand", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Heel", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Knee", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Maw", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Ribs", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Scapular Deltoid", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tail", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Temple", 'White Lion', 'HitLocation'),
							this.cardService.get("Beast’s Tricep", 'White Lion', 'HitLocation'),
							this.cardService.get("Clever Ploy", 'White Lion', 'HitLocation'),
							this.cardService.get("Fleshy Gut", 'White Lion', 'HitLocation'),
							this.cardService.get("Fuzzy Groin", 'White Lion', 'HitLocation'),
							this.cardService.get("Glorious Mane", 'White Lion', 'HitLocation'),
							this.cardService.get("Soft Belly", 'White Lion', 'HitLocation'),
						]
					},
				},

			},
			'Screaming Antelope': {
				'Level 1': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'M', /*1*/
						'B',
						'O',
						'S',
						'B', /*2*/
						'S',
						'B', /*3*/
						'B',
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Screaming Antelope', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Screaming Antelope Back', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
						],
						required: [],
						basic: 7,
						advanced: 3,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Delicate Inverted Knee", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Ferocious Spasm", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Tail", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Throat", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Mouth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Teeth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Tongue", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Gnarled Horns", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Palate", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Back", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Chest", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Ear", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Eye", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Flank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Hoof", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Inner Thigh", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Muzzle", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Rump", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shoulder", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Tiny Hands", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Wailing Slide", 'Screaming Antelope', 'HitLocation'),
						]
					},
				},
				'Level 2': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'B', /*1*/
						'B',
						'O',
						'S',
						'M', /*2*/
						'S',
						'B', /*3*/
						'B',
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Screaming Antelope', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Screaming Antelope Back', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Diabolical', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Delicate Inverted Knee", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Ferocious Spasm", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Tail", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Throat", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Mouth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Teeth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Tongue", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Gnarled Horns", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Palate", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Back", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Chest", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Ear", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Eye", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Flank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Hoof", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Inner Thigh", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Muzzle", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Rump", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shoulder", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Tiny Hands", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Wailing Slide", 'Screaming Antelope', 'HitLocation'),
						]
					},
				},
				'Level 3': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'B', /*1*/
						'B',
						'O',
						'S',
						'B', /*2*/
						'S',
						'M', /*3*/
						'B',
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 1,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Screaming Antelope', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Screaming Antelope Back', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Diabolical', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Hypermetabolism', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
						],
						required: [],
						basic: 12,
						advanced: 8,
						legendary: 2
					},
					HitLocation: {
						cards: [
							this.cardService.get("Delicate Inverted Knee", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Ferocious Spasm", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Tail", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Throat", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Mouth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Teeth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Tongue", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Gnarled Horns", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Palate", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Back", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Chest", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Ear", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Eye", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Flank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Hoof", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Inner Thigh", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Muzzle", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Rump", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shoulder", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Tiny Hands", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Wailing Slide", 'Screaming Antelope', 'HitLocation'),
						]
					},
				},
				'Mad Steed': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'B', /*1*/
						'B',
						'O',
						'S',
						'B', /*2*/
						'S',
						'M', /*3*/
						'B',
						'B'
					],
					life:20,
					attributes: {
						accuracy: 1,
						damage: 0,
						evasion: 0,
						luck: 1,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Screaming Antelope', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Mad Steed Back', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Diabolical', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Hypermetabolism', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Legendary Horns', 'Screaming Antelope', 'AI', 'legendary'),
							this.cardService.get('Berserker', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Kings Aura', 'Kingsmen', 'AI', 'starter'),
						],
						required: [
							this.cardService.get('Ravenous', 'Screaming Antelope', 'AI', 'advanced'),
							this.cardService.get('Crush and Devour', 'Screaming Antelope', 'AI', 'advanced'),
							this.cardService.get('Great Kick', 'Screaming Antelope', 'AI', 'advanced'),
							this.cardService.get('Bite', 'Screaming Antelope', 'AI', 'basic'),
							this.cardService.get('Bite', 'Screaming Antelope', 'AI', 'basic'),
							this.cardService.get('Stomp and Snort', 'Screaming Antelope', 'AI', 'basic'),
						],
						basic: 0,
						advanced: 0,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Delicate Inverted Knee", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Ferocious Spasm", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Tail", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Furry Throat", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Mouth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Teeth", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Giant Tongue", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Gnarled Horns", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Palate", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Back", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Chest", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Ear", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Eye", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Flank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Hoof", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Inner Thigh", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Muzzle", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Rump", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shank", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Shoulder", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Restless Tiny Hands", 'Screaming Antelope', 'HitLocation'),
							this.cardService.get("Wailing Slide", 'Screaming Antelope', 'HitLocation'),
						]
					},
				},
			},
			'Phoenix': {
				'Level 1': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'M', /*1*/
						'O',
						'S',
						'B', /*2*/
						'S',
						'B',
						'B', /*3*/
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Phoenix', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Phoenix Back', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Materialize', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Spiral Age', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Zeal', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Dreaded Decade', 'Phoenix', 'AI', 'starter'),
						],
						required: [],
						basic: 8,
						advanced: 3,
						legendary: 1
					},
					HitLocation: {
						cards: [
							this.cardService.get("Feathered Back", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Body", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Breast", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Buttocks", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Neck", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Wing", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Arm Pit", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Crest", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Eye", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Handed Feet", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Hands", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Head", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Primary Eyes", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Soft Belly", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Claws", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Sphincter", 'Phoenix', 'HitLocation'),
							this.cardService.get("Hard Beak", 'Phoenix', 'HitLocation'),
							this.cardService.get("Inner Face", 'Phoenix', 'HitLocation'),
							this.cardService.get("Soft Lower Gut", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tail Feathers", 'Phoenix', 'HitLocation'),
							this.cardService.get("Time Stop", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tiny Wing Hands", 'Phoenix', 'HitLocation'),

						]
					},
				},
				'Level 2': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'B', /*1*/
						'O',
						'S',
						'M', /*2*/
						'S',
						'B',
						'B', /*3*/
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Phoenix', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Phoenix Back', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Materialize', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Spiral Age', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Zeal', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Dreaded Decade', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Top of the Food Chain', 'Phoenix', 'AI', 'legendary'),
						],
						required: [],
						basic: 10,
						advanced: 6,
						legendary: 1
					},
					HitLocation: {
						cards: [
							this.cardService.get("Feathered Back", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Body", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Breast", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Buttocks", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Neck", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Wing", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Arm Pit", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Crest", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Eye", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Handed Feet", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Hands", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Head", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Primary Eyes", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Soft Belly", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Claws", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Sphincter", 'Phoenix', 'HitLocation'),
							this.cardService.get("Hard Beak", 'Phoenix', 'HitLocation'),
							this.cardService.get("Inner Face", 'Phoenix', 'HitLocation'),
							this.cardService.get("Soft Lower Gut", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tail Feathers", 'Phoenix', 'HitLocation'),
							this.cardService.get("Time Stop", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tiny Wing Hands", 'Phoenix', 'HitLocation'),
						]
					},
				},
				'Level 3': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'B', /*1*/
						'O',
						'S',
						'B', /*2*/
						'S',
						'B',
						'M', /*3*/
						'B'
					],
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 1,
						luck: 1,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Phoenix', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Phoenix Back', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Materialize', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Spiral Age', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Zeal', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Dreaded Decade', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Top of the Food Chain', 'Phoenix', 'AI', 'legendary'),
						],
						required: [],
						basic: 13,
						advanced: 7,
						legendary: 2
					},
					HitLocation: {
						cards: [
							this.cardService.get("Feathered Back", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Body", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Breast", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Buttocks", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Neck", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Wing", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Arm Pit", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Crest", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Eye", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Handed Feet", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Hands", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Head", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Primary Eyes", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Soft Belly", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Claws", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Sphincter", 'Phoenix', 'HitLocation'),
							this.cardService.get("Hard Beak", 'Phoenix', 'HitLocation'),
							this.cardService.get("Inner Face", 'Phoenix', 'HitLocation'),
							this.cardService.get("Soft Lower Gut", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tail Feathers", 'Phoenix', 'HitLocation'),
							this.cardService.get("Time Stop", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tiny Wing Hands", 'Phoenix', 'HitLocation'),
						]
					},
				},
				'Golden Eyed King': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'B', /*1*/
						'O',
						'S',
						'B', /*2*/
						'S',
						'B',
						'M', /*3*/
						'B'
					],
					life:25,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 1,
						luck: 1000,
						movement: 0,
						speed: 0,
						Toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Phoenix', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Golden Eyed King Back', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Materialize', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Spiral Age', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Dreaded Decade', 'Phoenix', 'AI', 'starter'),
							this.cardService.get('Top of the Food Chain', 'Phoenix', 'AI', 'legendary'),
							this.cardService.get('Berserker', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Weak Spot', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Cunning', 'White Lion', 'AI', 'starter'),
							this.cardService.get('Golden Eyes', 'White Lion', 'AI', 'legendary'),
						],
						required: [
							this.cardService.get('Bored', 'Phoenix', 'AI', 'basic'),
							this.cardService.get('Wing Punch', 'Phoenix', 'AI', 'basic'),
							this.cardService.get('Instant Wing Strike', 'Phoenix', 'AI', 'basic'),
							this.cardService.get('Peck', 'Phoenix', 'AI', 'basic'),
							this.cardService.get('Peck', 'Phoenix', 'AI', 'basic'),
							this.cardService.get('Pustule Cannon', 'Phoenix', 'AI', 'basic'),

							this.cardService.get('Gouge And Feast', 'Phoenix', 'AI', 'advanced'),
							this.cardService.get('Ripple', 'Phoenix', 'AI', 'advanced'),
							this.cardService.get('The Difference Between Us', 'Phoenix', 'AI', 'advanced'),
						],
						basic: 0,
						advanced: 0,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Feathered Back", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Body", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Breast", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Buttocks", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Neck", 'Phoenix', 'HitLocation'),
							this.cardService.get("Feathered Wing", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Arm Pit", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Crest", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Eye", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Handed Feet", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Hands", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Head", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Primary Eyes", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Soft Belly", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Claws", 'Phoenix', 'HitLocation'),
							this.cardService.get("Glorious Wing Sphincter", 'Phoenix', 'HitLocation'),
							this.cardService.get("Hard Beak", 'Phoenix', 'HitLocation'),
							this.cardService.get("Inner Face", 'Phoenix', 'HitLocation'),
							this.cardService.get("Soft Lower Gut", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tail Feathers", 'Phoenix', 'HitLocation'),
							this.cardService.get("Time Stop", 'Phoenix', 'HitLocation'),
							this.cardService.get("Tiny Wing Hands", 'Phoenix', 'HitLocation'),
						]
					},
				},
			},
			'The Watcher': {
				'Finale': {
					huntSetup: null,
					life: 15,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('The Watcher', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('The Watcher Back', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('Audience', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('Retinue', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('Stolen Dreams', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('Vapor of Nothingness', 'The Watcher', 'AI', 'starter'),
							this.cardService.get('Lantern Vortex', 'The Watcher', 'AI', 'starter'),
						],
						required: [],
						basic: 12,
						advanced: 0,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Black Out", 'The Watcher', 'HitLocation'),
							this.cardService.get("Blackened Lanterns", 'The Watcher', 'HitLocation'),
							this.cardService.get("Hydrostatic Fluids", 'The Watcher', 'HitLocation'),
							this.cardService.get("Hydrostatic Skeleton", 'The Watcher', 'HitLocation'),
							this.cardService.get("Inner Robes", 'The Watcher', 'HitLocation'),
							this.cardService.get("Outer Robes", 'The Watcher', 'HitLocation'),
							this.cardService.get("Tentacle Chains", 'The Watcher', 'HitLocation'),
							this.cardService.get("Tentacle Crown", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Corpus", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Epidermis", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Folds", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Ganglia", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Gastrodermis", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Hood", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Light", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Membrane", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Nerve Mask", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Nerve Net", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Nerve Ring", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Plexus", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Polyps", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Shroud", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Tentacles", 'The Watcher', 'HitLocation'),
							this.cardService.get("Void Toxin", 'The Watcher', 'HitLocation'),
							this.cardService.get("White Out", 'The Watcher', 'HitLocation'),
						]
					},
				},
			},
			'Kingsmen': {
				'Level 1': {
					huntSetup: null,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Kingsmen', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kingsmen Back', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Weak Spot', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Combat', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Battle Tempo', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Aura', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Outfighting', 'Kingsmen', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 2,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Acid Blood Discharge", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Axe Blade", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Handle", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Spear", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Back", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Breastplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Collar", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Faceplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gauntlet", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Greaves", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gutplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Helm", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Knees", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Plume", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sabatons", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sheath", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Skirt", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Vambraces", 'Kingsmen', 'HitLocation'),
						],
						hitLocationDeckCallback: function (deck) {
							for (var i = 0; i < 3; i++) {
								var battlePressure = this.cardService.get("Battle Pressure", 'Kingsmen', 'HitLocation');
								deck.cards.unshift(battlePressure);
							}
							return deck;
						},
						cardService: this.cardService
					},
				},
				'Level 2': {
					huntSetup: null,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Kingsmen', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kingsmen Back', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Weak Spot', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Combat', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Battle Tempo', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Aura', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Outfighting', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Silent Hymn', 'Kingsmen', 'AI', 'starter'),
						],
						required: [],
						basic: 11,
						advanced: 4,
						legendary: 1
					},
					HitLocation: {
						cards: [
							this.cardService.get("Acid Blood Discharge", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Axe Blade", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Handle", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Spear", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Back", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Breastplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Collar", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Faceplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gauntlet", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Greaves", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gutplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Helm", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Knees", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Plume", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sabatons", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sheath", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Skirt", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Vambraces", 'Kingsmen', 'HitLocation'),
						],
						hitLocationDeckCallback: function (deck) {
							for (var i = 0; i < 3; i++) {
								var battlePressure = this.cardService.get("Battle Pressure", 'Kingsmen', 'HitLocation');
								deck.cards.unshift(battlePressure);
							}
							return deck;
						},
						cardService: this.cardService
					},
				},
				'Level 3': {
					huntSetup: null,
					attributes: {
						accuracy: 2,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Kingsmen', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kingsmen Back', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Weak Spot', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Combat', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Battle Tempo', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Kings Aura', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Outfighting', 'Kingsmen', 'AI', 'starter'),
							this.cardService.get('Silent Hymn', 'Kingsmen', 'AI', 'starter'),
						],
						required: [],
						basic: 12,
						advanced: 5,
						legendary: 1
					},
					HitLocation: {
						cards: [
							this.cardService.get("Acid Blood Discharge", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Axe Blade", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Handle", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Halberd Spear", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Back", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Breastplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Collar", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Faceplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gauntlet", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Greaves", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Gutplate", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Helm", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Knees", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Plume", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sabatons", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Sheath", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Skirt", 'Kingsmen', 'HitLocation'),
							this.cardService.get("Regal Vambraces", 'Kingsmen', 'HitLocation'),
						],
						hitLocationDeckCallback: function (deck) {
							for (var i = 0; i < 3; i++) {
								var battlePressure = this.cardService.get("Battle Pressure", 'Kingsmen', 'HitLocation');
								deck.cards.unshift(battlePressure);
							}
							return deck;
						},
						cardService: this.cardService
					},
				},
			},
			'The Hand': {
				'Level 1': {
					huntSetup: null,
					life: 12,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('The Hand', 'The Hand', 'AI', 'starter'),
							this.cardService.get('The Hand Back', 'The Hand', 'AI', 'starter'),
							this.cardService.get("Ghost Step", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Impossible Eyes", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Blue Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Closed", 'The Hand', 'AI', 'starter'),
						],
						archive: [
							this.cardService.get("Blue Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Respect", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Polarized Aura", 'The Hand', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 0,
						legendary: 0,
						aiDeckCallBack: function (deck) {
							var applause = this.cardService.get("Applause", 'The Hand', 'AI', 'starter');
							deck.cards.push(applause);
							return deck;
						},
						cardService: this.cardService
					},
					HitLocation: {
						cards: [
							this.cardService.get("Gilded Cuirass", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Bone Bracer", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Collar", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Girdle", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Poets Blouse", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Rib Plate", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Cape", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Pantaloons", 'The Hand', 'HitLocation'),
							this.cardService.get("Full Speed", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Codpiece", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Face Visor", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Sabaton", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Spaulder", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Crown", 'The Hand', 'HitLocation'),
							this.cardService.get("Handed Lantern", 'The Hand', 'HitLocation'),
							this.cardService.get("Shadow Fabric Gloves", 'The Hand', 'HitLocation'),
							this.cardService.get("Spine Saber Sheath", 'The Hand', 'HitLocation'),
						]
					},
				},
				'Level 2': {
					huntSetup: null,
					life: 17,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('The Hand', 'The Hand', 'AI', 'starter'),
							this.cardService.get('The Hand Back', 'The Hand', 'AI', 'starter'),
							this.cardService.get("Ghost Step", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Impossible Eyes", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Blue Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Closed", 'The Hand', 'AI', 'starter'),
						],
						archive: [
							this.cardService.get("Blue Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Respect", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Polarized Aura", 'The Hand', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 1,
						legendary: 0,
						aiDeckCallBack: function (deck) {
							var applause = this.cardService.get("Applause", 'The Hand', 'AI', 'starter');
							deck.cards.push(applause);
							return deck;
						},
						cardService: this.cardService
					},
					HitLocation: {
						cards: [
							this.cardService.get("Gilded Cuirass", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Bone Bracer", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Collar", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Girdle", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Poets Blouse", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Rib Plate", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Cape", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Pantaloons", 'The Hand', 'HitLocation'),
							this.cardService.get("Full Speed", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Codpiece", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Face Visor", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Sabaton", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Spaulder", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Crown", 'The Hand', 'HitLocation'),
							this.cardService.get("Handed Lantern", 'The Hand', 'HitLocation'),
							this.cardService.get("Shadow Fabric Gloves", 'The Hand', 'HitLocation'),
							this.cardService.get("Spine Saber Sheath", 'The Hand', 'HitLocation'),
						]
					},
				},
				'Level 3': {
					huntSetup: null,
					life: 20,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('The Hand', 'The Hand', 'AI', 'starter'),
							this.cardService.get('The Hand Back', 'The Hand', 'AI', 'starter'),
							this.cardService.get("Ghost Step", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Impossible Eyes", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Blue Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Closed", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Closed", 'The Hand', 'AI', 'starter'),
						],
						archive: [
							this.cardService.get("Blue Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Green Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Red Lens - Open", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Respect", 'The Hand', 'AI', 'starter'),
							this.cardService.get("Polarized Aura", 'The Hand', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 1,
						legendary: 0,
						aiDeckCallBack: function (deck) {
							var applause = this.cardService.get("Applause", 'The Hand', 'AI', 'starter');
							deck.cards.push(applause);
							return deck;
						},
						cardService: this.cardService
					},
					HitLocation: {
						cards: [
							this.cardService.get("Gilded Cuirass", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Bone Bracer", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Collar", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Fur Girdle", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Poets Blouse", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Rib Plate", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Cape", 'The Hand', 'HitLocation'),
							this.cardService.get("Exotic Silk Pantaloons", 'The Hand', 'HitLocation'),
							this.cardService.get("Full Speed", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Codpiece", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Face Visor", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Sabaton", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Spaulder", 'The Hand', 'HitLocation'),
							this.cardService.get("Gilded Crown", 'The Hand', 'HitLocation'),
							this.cardService.get("Handed Lantern", 'The Hand', 'HitLocation'),
							this.cardService.get("Shadow Fabric Gloves", 'The Hand', 'HitLocation'),
							this.cardService.get("Spine Saber Sheath", 'The Hand', 'HitLocation'),
						]
					},
				},
			},
			'Butcher': {
				'Level 1': {
					huntSetup: null,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Butcher', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Butcher Back', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Berserker', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Dreaded Trophies', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Fast Target', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Infectious Lunacy', 'Butcher', 'AI', 'starter'),
						],
						required: [],
						basic: 7,
						advanced: 5,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Armored Pig Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Butcher's Mask", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver L", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver R", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Bellow", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Breastplate", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Crown", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gauntlet", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Greaves", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gut", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Scrag", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Vambraces", 'Butcher', 'HitLocation'),
							this.cardService.get("Overpower", 'Butcher', 'HitLocation'),
							this.cardService.get("Thick Cape", 'Butcher', 'HitLocation'),
						]
					},
				},
				'Level 2': {
					huntSetup: null,
					attributes: {
						accuracy: 0,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Butcher', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Butcher Back', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Frenzied Berserker', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Dreaded Trophies', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Fast Target', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Infectious Lunacy', 'Butcher', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Armored Pig Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Butcher's Mask", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver L", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver R", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Bellow", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Breastplate", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Crown", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gauntlet", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Greaves", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gut", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Scrag", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Vambraces", 'Butcher', 'HitLocation'),
							this.cardService.get("Overpower", 'Butcher', 'HitLocation'),
							this.cardService.get("Thick Cape", 'Butcher', 'HitLocation'),
						]
					},
				},
				'Level 3': {
					huntSetup: null,
					attributes: {
						accuracy: 2,
						damage: 0,
						evasion: 0,
						luck: 0,
						movement: 0,
						speed: 0,
						toughness: 0,
					},
					aiDecks: {
						starter: [
							this.cardService.get('Butcher', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Butcher Back', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Dreaded Trophies', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Fast Target', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Frenzied Berserker', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Infectious Lunacy', 'Butcher', 'AI', 'starter'),
							this.cardService.get('Invincible', 'Butcher', 'AI', 'starter'),
						],
						required: [],
						basic: 11,
						advanced: 10,
						legendary: 0
					},
					HitLocation: {
						cards: [
							this.cardService.get("Armored Pig Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Butcher's Mask", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver L", 'Butcher', 'HitLocation'),
							this.cardService.get("Cleaver R", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Bellow", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Breastplate", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Crown", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gauntlet", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Greaves", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Gut", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Scrag", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Shoulder", 'Butcher', 'HitLocation'),
							this.cardService.get("Furious Vambraces", 'Butcher', 'HitLocation'),
							this.cardService.get("Overpower", 'Butcher', 'HitLocation'),
							this.cardService.get("Thick Cape", 'Butcher', 'HitLocation'),
						]
					},
				},
			},

		}

		factory.getDefinition = getDefinition;
		factory.getMonsters = getMonsters;
		factory.getMonsterLevels = getMonsterLevels;
		factory.getMonsterAiDeckDefinition = getMonsterAiDeckDefinition;
		factory.getMonsterHitLocationDeckDefinition = getMonsterHitLocationDeckDefinition;
		factory.getMonsterResourceDeckDefinition = getMonsterResourceDeckDefinition;
		factory.getMonsterAttributeDefinition = getMonsterAttributeDefinition;
		factory.getMonsterLife = getMonsterLife;
		function getDefinition(monsterName, level) {
			return this.definitions[monsterName][level];
		}

		function getMonsters() {
			var list = [];
			for (var monsterName in this.definitions) {
				list.push(monsterName);
			}
			return list;
		}

		function getMonsterLevels(monsterName) {
			var list = [];
			for (var aiLevel in this.definitions[monsterName]) {
				list.push(aiLevel);
			}
			return list;
		}

		function getMonsterAiDeckDefinition(monsterName, aiLevel) {
			return this.definitions[monsterName][aiLevel].aiDecks;
		}

		function getMonsterHitLocationDeckDefinition(monsterName, aiLevel) {
			return this.definitions[monsterName][aiLevel].HitLocation;
		}

		function getMonsterAttributeDefinition(monsterName, aiLevel) {
			return this.definitions[monsterName][aiLevel].attributes;
		}

		function getMonsterLife(monsterName, aiLevel) {
			return this.definitions[monsterName][aiLevel].life;
		}

		function getMonsterResourceDeckDefinition(monsterName) {
			return angular.copy(this.monsterCardLibrary.library[monsterName].Resource);
		}

		return factory;
	}

})();