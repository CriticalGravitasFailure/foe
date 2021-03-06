Items.Accessories = {};

Items.Accessories.CrudeBook = new Item("book0", "C.Book", ItemType.Accessory);
Items.Accessories.CrudeBook.price = 20;
Items.Accessories.CrudeBook.Short = function() { return "Crude book"; }
Items.Accessories.CrudeBook.Long = function() { return "A heavy book on a rather dry subject. Not a very interesting read."; }
Items.Accessories.CrudeBook.effect.intelligence = 1;

Items.Accessories.IronBangle = new Item("bangle0", "I.Bangle", ItemType.Accessory);
Items.Accessories.IronBangle.price = 30;
Items.Accessories.IronBangle.Short = function() { return "Iron bangle"; }
Items.Accessories.IronBangle.Long = function() { return "A crude lump of iron, fashioned as a bangle. Provides minor protection from harm."; }
Items.Accessories.IronBangle.effect.maxHp = 20;

Items.Accessories.GoldEarring = new Item("ear0", "G.Earring", ItemType.Accessory);
Items.Accessories.GoldEarring.price = 30;
Items.Accessories.GoldEarring.Short = function() { return "Gold earring"; }
Items.Accessories.GoldEarring.Long = function() { return "A golden earring. Pretty, but not terribly useful in combat."; }
Items.Accessories.GoldEarring.effect.charisma = 2;

Items.Accessories.RaniFavor = new Item("neck0", "Rani's favor", ItemType.Accessory);
Items.Accessories.RaniFavor.price = 1000;
Items.Accessories.RaniFavor.Short = function() { return "Silver necklace"; }
Items.Accessories.RaniFavor.Long = function() { return "An elaborate silver necklace, gifted to you by Rani, prince of Rigard."; }
Items.Accessories.RaniFavor.effect.maxHp = 100;
Items.Accessories.RaniFavor.effect.spirit = 5;
Items.Accessories.RaniFavor.effect.charisma = 5;

Items.Accessories.LagonCrown = new Item("head0", "Lagon's crown", ItemType.Accessory);
Items.Accessories.LagonCrown.price = 1250;
Items.Accessories.LagonCrown.Short = function() { return "Lagon's crown"; }
Items.Accessories.LagonCrown.Long = function() { return "A crown once belonging to the lagomorph king."; }
Items.Accessories.LagonCrown.effect.maxHp = 120;
Items.Accessories.LagonCrown.effect.maxLust = 80;
Items.Accessories.LagonCrown.effect.strength = 4;
Items.Accessories.LagonCrown.effect.dexterity = 6;
Items.Accessories.LagonCrown.effect.libido = 3;

Items.Accessories.SimpleCuffs = new Item("cuffs0", "S.Cuffs", ItemType.Accessory);
Items.Accessories.SimpleCuffs.price = 20;
Items.Accessories.SimpleCuffs.Short = function() { return "Simple cuffs"; }
Items.Accessories.SimpleCuffs.Long = function() { return "Simple restraints"; }
Items.Accessories.SimpleCuffs.effect.maxLust = 10;
Items.Accessories.SimpleCuffs.effect.libido = 1;

