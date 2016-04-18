(function () {
	'use strict';
	angular
		.module('core.monsterDefinition')
		.factory('monsterDefinition', monsterDefinition);

	monsterDefinition.$inject = ['card','monsterCardLibrary'];

	function monsterDefinition(card,monsterCardLibrary) {
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
						starter: [],
						required: [
							this.cardService.get('Claw', 'White Lion', 'AI', 'basic'),
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
						legendary: 0
					},
					HitLocation: [
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
					],
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
						starter: [],
						required: [],
						basic: 7,
						advanced: 3,
						legendary: 0
					},
					HitLocation: [
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
					],
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
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					},
					HitLocation: [
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
					],
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
							this.cardService.get('Merciless', 'White Lion', 'AI', 'starter')
						],
						required: [],
						basic: 10,
						advanced: 9,
						legendary: 2
					},
					HitLocation: [
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
					],
				}
			},
			'Screaming Antelope': {
				'Level 1': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'M',/*1*/
						'B',
						'O',
						'S',
						'B',/*2*/
						'S',
						'B',/*3*/
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
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
						],
						required: [],
						basic: 7,
						advanced: 3,
						legendary: 0
					},
					HitLocation: [
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
					],
				},
				'Level 2': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'B',/*1*/
						'B',
						'O',
						'S',
						'M',/*2*/
						'S',
						'B',/*3*/
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
							this.cardService.get('Trample', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Diabolical', 'Screaming Antelope', 'AI', 'starter'),
							this.cardService.get('Gobbled Up', 'Screaming Antelope', 'AI', 'starter'),
						],
						required: [],
						basic: 10,
						advanced: 5,
						legendary: 0
					},
					HitLocation: [
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
					],
				},
				'Level 3': {
					huntSetup: [
						'P',
						'S',
						'B',
						'S',
						'B',/*1*/
						'B',
						'O',
						'S',
						'B',/*2*/
						'S',
						'M',/*3*/
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
					HitLocation: [
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
					],
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
						'M',/*1*/
						'O',
						'S',
						'B',/*2*/
						'S',
						'B',
						'B',/*3*/
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
					HitLocation: [
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

					],
				},
				'Level 2': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'B',/*1*/
						'O',
						'S',
						'M',/*2*/
						'S',
						'B',
						'B',/*3*/
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
					HitLocation: [
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
					],
				},
				'Level 3': {
					huntSetup: [
						'P',
						'B',
						'S',
						'B',
						'S',
						'B',/*1*/
						'O',
						'S',
						'B',/*2*/
						'S',
						'B',
						'M',/*3*/
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
					HitLocation: [
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
					],
				},

			},
		}

		factory.getDefinition = getDefinition;
		factory.getMonsters = getMonsters;
		factory.getMonsterLevels = getMonsterLevels;
		factory.getMonsterAiDeckDefinition = getMonsterAiDeckDefinition;
		factory.getMonsterHitLocationDeckDefinition =getMonsterHitLocationDeckDefinition;
		factory.getMonsterResourceDeckDefinition = getMonsterResourceDeckDefinition;
		factory.getMonsterAttributeDefinition = getMonsterAttributeDefinition;
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

		function getMonsterResourceDeckDefinition(monsterName){
			return angular.copy(this.monsterCardLibrary.library[monsterName].Resource);
		}

		return factory;
	}

})();