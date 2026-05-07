// 1. ضع البيانات هنا (تم دمج بيانات items.json داخل المصفوفة)
const allItems = [
    { "id": "acacia_log", "name": "Acacia Log", "category": "Blocks", "image": "blocks/acacia_log.png" },
    { "id": "acacia_planks", "name": "Acacia Planks", "category": "Blocks", "image": "blocks/acacia_planks.png" },
    { "id": "amethyst_block", "name": "Amethyst Block", "category": "Blocks", "image": "blocks/amethyst_block.png" },
    { "id": "ancient_debris_side", "name": "Ancient Debris Side", "category": "Blocks", "image": "blocks/ancient_debris_side.png" },
    { "id": "andesite", "name": "Andesite", "category": "Blocks", "image": "blocks/andesite.png" },
    { "id": "bamboo_block", "name": "Bamboo Block", "category": "Blocks", "image": "blocks/bamboo_block.png" },
    { "id": "bamboo_mosaic", "name": "Bamboo Mosaic", "category": "Blocks", "image": "blocks/bamboo_mosaic.png" },
    { "id": "bamboo_planks", "name": "Bamboo Planks", "category": "Blocks", "image": "blocks/bamboo_planks.png" },
    { "id": "bamboo_trapdoor", "name": "Bamboo Trapdoor", "category": "Blocks", "image": "blocks/bamboo_trapdoor.png" },
    { "id": "barrel_side", "name": "Barrel Side", "category": "Blocks", "image": "blocks/barrel_side.png" },
    { "id": "basalt_side", "name": "Basalt Side", "category": "Blocks", "image": "blocks/basalt_side.png" },
    { "id": "bedrock", "name": "Bedrock", "category": "Blocks", "image": "blocks/bedrock.png" },
    { "id": "beehive_front", "name": "Beehive Front", "category": "Blocks", "image": "blocks/beehive_front.png" },
    { "id": "bee_nest_front", "name": "Bee Nest Front", "category": "Blocks", "image": "blocks/bee_nest_front.png" },
    { "id": "birch_log", "name": "Birch Log", "category": "Blocks", "image": "blocks/birch_log.png" },
    { "id": "birch_planks", "name": "Birch Planks", "category": "Blocks", "image": "blocks/birch_planks.png" },
    { "id": "birch_trapdoor", "name": "Birch Trapdoor", "category": "Blocks", "image": "blocks/birch_trapdoor.png" },
    { "id": "blackstone", "name": "Blackstone", "category": "Blocks", "image": "blocks/blackstone.png" },
    { "id": "black_concrete", "name": "Black Concrete", "category": "Blocks", "image": "blocks/black_concrete.png" },
    { "id": "black_concrete_powder", "name": "Black Concrete Powder", "category": "Blocks", "image": "blocks/black_concrete_powder.png" },
    { "id": "black_glazed_terracotta", "name": "Black Glazed Terracotta", "category": "Blocks", "image": "blocks/black_glazed_terracotta.png" },
    { "id": "black_shulker_box", "name": "Black Shulker Box", "category": "Blocks", "image": "blocks/black_shulker_box.png" },
    { "id": "black_stained_glass", "name": "Black Stained Glass", "category": "Blocks", "image": "blocks/black_stained_glass.png" },
    { "id": "black_terracotta", "name": "Black Terracotta", "category": "Blocks", "image": "blocks/black_terracotta.png" },
    { "id": "black_wool", "name": "Black Wool", "category": "Blocks", "image": "blocks/black_wool.png" },
    { "id": "blast_furnace_front", "name": "Blast Furnace Front", "category": "Blocks", "image": "blocks/blast_furnace_front.png" },
    { "id": "blue_concrete", "name": "Blue Concrete", "category": "Blocks", "image": "blocks/blue_concrete.png" },
    { "id": "blue_concrete_powder", "name": "Blue Concrete Powder", "category": "Blocks", "image": "blocks/blue_concrete_powder.png" },
    { "id": "blue_glazed_terracotta", "name": "Blue Glazed Terracotta", "category": "Blocks", "image": "blocks/blue_glazed_terracotta.png" },
    { "id": "blue_ice", "name": "Blue Ice", "category": "Blocks", "image": "blocks/blue_ice.png" },
    { "id": "blue_shulker_box", "name": "Blue Shulker Box", "category": "Blocks", "image": "blocks/blue_shulker_box.png" },
    { "id": "blue_stained_glass", "name": "Blue Stained Glass", "category": "Blocks", "image": "blocks/blue_stained_glass.png" },
    { "id": "blue_terracotta", "name": "Blue Terracotta", "category": "Blocks", "image": "blocks/blue_terracotta.png" },
    { "id": "blue_wool", "name": "Blue Wool", "category": "Blocks", "image": "blocks/blue_wool.png" },
    { "id": "bone_block_side", "name": "Bone Block Side", "category": "Blocks", "image": "blocks/bone_block_side.png" },
    { "id": "bookshelf", "name": "Bookshelf", "category": "Blocks", "image": "blocks/bookshelf.png" },
    { "id": "brain_coral_block", "name": "Brain Coral Block", "category": "Blocks", "image": "blocks/brain_coral_block.png" },
    { "id": "bricks", "name": "Bricks", "category": "Blocks", "image": "blocks/bricks.png" },
    { "id": "brown_concrete", "name": "Brown Concrete", "category": "Blocks", "image": "blocks/brown_concrete.png" },
    { "id": "brown_concrete_powder", "name": "Brown Concrete Powder", "category": "Blocks", "image": "blocks/brown_concrete_powder.png" },
    { "id": "brown_glazed_terracotta", "name": "Brown Glazed Terracotta", "category": "Blocks", "image": "blocks/brown_glazed_terracotta.png" },
    { "id": "brown_mushroom_block", "name": "Brown Mushroom Block", "category": "Blocks", "image": "blocks/brown_mushroom_block.png" },
    { "id": "brown_shulker_box", "name": "Brown Shulker Box", "category": "Blocks", "image": "blocks/brown_shulker_box.png" },
    { "id": "brown_stained_glass", "name": "Brown Stained Glass", "category": "Blocks", "image": "blocks/brown_stained_glass.png" },
    { "id": "brown_terracotta", "name": "Brown Terracotta", "category": "Blocks", "image": "blocks/brown_terracotta.png" },
    { "id": "brown_wool", "name": "Brown Wool", "category": "Blocks", "image": "blocks/brown_wool.png" },
    { "id": "bubble_coral_block", "name": "Bubble Coral Block", "category": "Blocks", "image": "blocks/bubble_coral_block.png" },
    { "id": "budding_amethyst", "name": "Budding Amethyst", "category": "Blocks", "image": "blocks/budding_amethyst.png" },
    { "id": "cactus_flower", "name": "Cactus Flower", "category": "Blocks", "image": "blocks/cactus_flower.png" },
    { "id": "cactus_side", "name": "Cactus Side", "category": "Blocks", "image": "blocks/cactus_side.png" },
    { "id": "cake_top", "name": "Cake Top", "category": "Blocks", "image": "blocks/cake_top.png" },
    { "id": "calcite", "name": "Calcite", "category": "Blocks", "image": "blocks/calcite.png" },
    { "id": "cherry_leaves", "name": "Cherry Leaves", "category": "Blocks", "image": "blocks/cherry_leaves.png" },
    { "id": "cherry_log", "name": "Cherry Log", "category": "Blocks", "image": "blocks/cherry_log.png" },
    { "id": "cherry_planks", "name": "Cherry Planks", "category": "Blocks", "image": "blocks/cherry_planks.png" },
    { "id": "cherry_trapdoor", "name": "Cherry Trapdoor", "category": "Blocks", "image": "blocks/cherry_trapdoor.png" },
    { "id": "chiseled_bookshelf_empty", "name": "Chiseled Bookshelf Empty", "category": "Blocks", "image": "blocks/chiseled_bookshelf_empty.png" },
    { "id": "chiseled_bookshelf_occupied", "name": "Chiseled Bookshelf Occupied", "category": "Blocks", "image": "blocks/chiseled_bookshelf_occupied.png" },
    { "id": "chiseled_copper", "name": "Chiseled Copper", "category": "Blocks", "image": "blocks/chiseled_copper.png" },
    { "id": "chiseled_deepslate", "name": "Chiseled Deepslate", "category": "Blocks", "image": "blocks/chiseled_deepslate.png" },
    { "id": "chiseled_nether_bricks", "name": "Chiseled Nether Bricks", "category": "Blocks", "image": "blocks/chiseled_nether_bricks.png" },
    { "id": "chiseled_polished_blackstone", "name": "Chiseled Polished Blackstone", "category": "Blocks", "image": "blocks/chiseled_polished_blackstone.png" },
    { "id": "chiseled_quartz_block", "name": "Chiseled Quartz Block", "category": "Blocks", "image": "blocks/chiseled_quartz_block.png" },
    { "id": "chiseled_red_sandstone", "name": "Chiseled Red Sandstone", "category": "Blocks", "image": "blocks/chiseled_red_sandstone.png" },
    { "id": "chiseled_resin_bricks", "name": "Chiseled Resin Bricks", "category": "Blocks", "image": "blocks/chiseled_resin_bricks.png" },
    { "id": "chiseled_sandstone", "name": "Chiseled Sandstone", "category": "Blocks", "image": "blocks/chiseled_sandstone.png" },
    { "id": "chiseled_stone_bricks", "name": "Chiseled Stone Bricks", "category": "Blocks", "image": "blocks/chiseled_stone_bricks.png" },
    { "id": "chiseled_tuff", "name": "Chiseled Tuff", "category": "Blocks", "image": "blocks/chiseled_tuff.png" },
    { "id": "chiseled_tuff_bricks", "name": "Chiseled Tuff Bricks", "category": "Blocks", "image": "blocks/chiseled_tuff_bricks.png" },
    { "id": "clay", "name": "Clay", "category": "Blocks", "image": "blocks/clay.png" },
    { "id": "coal_block", "name": "Coal Block", "category": "Blocks", "image": "blocks/coal_block.png" },
    { "id": "coal_ore", "name": "Coal Ore", "category": "Blocks", "image": "blocks/coal_ore.png" },
    { "id": "coarse_dirt", "name": "Coarse Dirt", "category": "Blocks", "image": "blocks/coarse_dirt.png" },
    { "id": "cobbled_deepslate", "name": "Cobbled Deepslate", "category": "Blocks", "image": "blocks/cobbled_deepslate.png" },
    { "id": "cobblestone", "name": "Cobblestone", "category": "Blocks", "image": "blocks/cobblestone.png" },
    { "id": "cobweb", "name": "Cobweb", "category": "Blocks", "image": "blocks/cobweb.png" },
    { "id": "composter_side", "name": "Composter Side", "category": "Blocks", "image": "blocks/composter_side.png" },
    { "id": "copper_block", "name": "Copper Block", "category": "Blocks", "image": "blocks/copper_block.png" },
    { "id": "copper_bulb", "name": "Copper Bulb", "category": "Blocks", "image": "blocks/copper_bulb.png" },
    { "id": "copper_bulb_lit", "name": "Copper Bulb Lit", "category": "Blocks", "image": "blocks/copper_bulb_lit.png" },
    { "id": "copper_bulb_lit_powered", "name": "Copper Bulb Lit Powered", "category": "Blocks", "image": "blocks/copper_bulb_lit_powered.png" },
    { "id": "copper_bulb_powered", "name": "Copper Bulb Powered", "category": "Blocks", "image": "blocks/copper_bulb_powered.png" },
    { "id": "copper_grate", "name": "Copper Grate", "category": "Blocks", "image": "blocks/copper_grate.png" },
    { "id": "copper_ore", "name": "Copper Ore", "category": "Blocks", "image": "blocks/copper_ore.png" },
    { "id": "copper_trapdoor", "name": "Copper Trapdoor", "category": "Blocks", "image": "blocks/copper_trapdoor.png" },
    { "id": "cracked_deepslate_bricks", "name": "Cracked Deepslate Bricks", "category": "Blocks", "image": "blocks/cracked_deepslate_bricks.png" },
    { "id": "cracked_deepslate_tiles", "name": "Cracked Deepslate Tiles", "category": "Blocks", "image": "blocks/cracked_deepslate_tiles.png" },
    { "id": "cracked_nether_bricks", "name": "Cracked Nether Bricks", "category": "Blocks", "image": "blocks/cracked_nether_bricks.png" },
    { "id": "cracked_polished_blackstone_bricks", "name": "Cracked Polished Blackstone Bricks", "category": "Blocks", "image": "blocks/cracked_polished_blackstone_bricks.png" },
    { "id": "cracked_stone_bricks", "name": "Cracked Stone Bricks", "category": "Blocks", "image": "blocks/cracked_stone_bricks.png" },
    { "id": "crafting_table_front", "name": "Crafting Table Front", "category": "Blocks", "image": "blocks/crafting_table_front.png" },
    { "id": "creaking_heart", "name": "Creaking Heart", "category": "Blocks", "image": "blocks/creaking_heart.png" },
    { "id": "crimson_nylium_side", "name": "Crimson Nylium Side", "category": "Blocks", "image": "blocks/crimson_nylium_side.png" },
    { "id": "crimson_planks", "name": "Crimson Planks", "category": "Blocks", "image": "blocks/crimson_planks.png" },
    { "id": "crying_obsidian", "name": "Crying Obsidian", "category": "Blocks", "image": "blocks/crying_obsidian.png" },
    { "id": "cut_copper", "name": "Cut Copper", "category": "Blocks", "image": "blocks/cut_copper.png" },
    { "id": "cut_red_sandstone", "name": "Cut Red Sandstone", "category": "Blocks", "image": "blocks/cut_red_sandstone.png" },
    { "id": "cut_sandstone", "name": "Cut Sandstone", "category": "Blocks", "image": "blocks/cut_sandstone.png" },
    { "id": "cyan_concrete", "name": "Cyan Concrete", "category": "Blocks", "image": "blocks/cyan_concrete.png" },
    { "id": "cyan_concrete_powder", "name": "Cyan Concrete Powder", "category": "Blocks", "image": "blocks/cyan_concrete_powder.png" },
    { "id": "cyan_glazed_terracotta", "name": "Cyan Glazed Terracotta", "category": "Blocks", "image": "blocks/cyan_glazed_terracotta.png" },
    { "id": "cyan_shulker_box", "name": "Cyan Shulker Box", "category": "Blocks", "image": "blocks/cyan_shulker_box.png" },
    { "id": "cyan_stained_glass", "name": "Cyan Stained Glass", "category": "Blocks", "image": "blocks/cyan_stained_glass.png" },
    { "id": "cyan_terracotta", "name": "Cyan Terracotta", "category": "Blocks", "image": "blocks/cyan_terracotta.png" },
    { "id": "cyan_wool", "name": "Cyan Wool", "category": "Blocks", "image": "blocks/cyan_wool.png" },
    { "id": "dark_oak_leaves", "name": "Dark Oak Leaves", "category": "Blocks", "image": "blocks/dark_oak_leaves.png" },
    { "id": "dark_oak_log", "name": "Dark Oak Log", "category": "Blocks", "image": "blocks/dark_oak_log.png" },
    { "id": "dark_oak_planks", "name": "Dark Oak Planks", "category": "Blocks", "image": "blocks/dark_oak_planks.png" },
    { "id": "dark_oak_trapdoor", "name": "Dark Oak Trapdoor", "category": "Blocks", "image": "blocks/dark_oak_trapdoor.png" },
    { "id": "dark_prismarine", "name": "Dark Prismarine", "category": "Blocks", "image": "blocks/dark_prismarine.png" },
    { "id": "daylight_detector_inverted_top", "name": "Daylight Detector Inverted Top", "category": "Blocks", "image": "blocks/daylight_detector_inverted_top.png" },
    { "id": "daylight_detector_top", "name": "Daylight Detector Top", "category": "Blocks", "image": "blocks/daylight_detector_top.png" },
    { "id": "dead_brain_coral_block", "name": "Dead Brain Coral Block", "category": "Blocks", "image": "blocks/dead_brain_coral_block.png" },
    { "id": "dead_bubble_coral_block", "name": "Dead Bubble Coral Block", "category": "Blocks", "image": "blocks/dead_bubble_coral_block.png" },
    { "id": "dead_fire_coral_block", "name": "Dead Fire Coral Block", "category": "Blocks", "image": "blocks/dead_fire_coral_block.png" },
    { "id": "dead_horn_coral_block", "name": "Dead Horn Coral Block", "category": "Blocks", "image": "blocks/dead_horn_coral_block.png" },
    { "id": "dead_tube_coral_block", "name": "Dead Tube Coral Block", "category": "Blocks", "image": "blocks/dead_tube_coral_block.png" },
    { "id": "deepslate", "name": "Deepslate", "category": "Blocks", "image": "blocks/deepslate.png" },
    { "id": "deepslate_bricks", "name": "Deepslate Bricks", "category": "Blocks", "image": "blocks/deepslate_bricks.png" },
    { "id": "deepslate_coal_ore", "name": "Deepslate Coal Ore", "category": "Blocks", "image": "blocks/deepslate_coal_ore.png" },
    { "id": "deepslate_copper_ore", "name": "Deepslate Copper Ore", "category": "Blocks", "image": "blocks/deepslate_copper_ore.png" },
    { "id": "deepslate_diamond_ore", "name": "Deepslate Diamond Ore", "category": "Blocks", "image": "blocks/deepslate_diamond_ore.png" },
    { "id": "deepslate_emerald_ore", "name": "Deepslate Emerald Ore", "category": "Blocks", "image": "blocks/deepslate_emerald_ore.png" },
    { "id": "deepslate_gold_ore", "name": "Deepslate Gold Ore", "category": "Blocks", "image": "blocks/deepslate_gold_ore.png" },
    { "id": "deepslate_iron_ore", "name": "Deepslate Iron Ore", "category": "Blocks", "image": "blocks/deepslate_iron_ore.png" },
    { "id": "deepslate_lapis_ore", "name": "Deepslate Lapis Ore", "category": "Blocks", "image": "blocks/deepslate_lapis_ore.png" },
    { "id": "deepslate_redstone_ore", "name": "Deepslate Redstone Ore", "category": "Blocks", "image": "blocks/deepslate_redstone_ore.png" },
    { "id": "deepslate_tiles", "name": "Deepslate Tiles", "category": "Blocks", "image": "blocks/deepslate_tiles.png" },
    { "id": "deepslate_top", "name": "Deepslate Top", "category": "Blocks", "image": "blocks/deepslate_top.png" },
    { "id": "diamond_block", "name": "Diamond Block", "category": "Blocks", "image": "blocks/diamond_block.png" },
    { "id": "diamond_ore", "name": "Diamond Ore", "category": "Blocks", "image": "blocks/diamond_ore.png" },
    { "id": "diorite", "name": "Diorite", "category": "Blocks", "image": "blocks/diorite.png" },
    { "id": "dirt", "name": "Dirt", "category": "Blocks", "image": "blocks/dirt.png" },
    { "id": "dirt_path_side", "name": "Dirt Path Side", "category": "Blocks", "image": "blocks/dirt_path_side.png" },
    { "id": "dispenser_front", "name": "Dispenser Front", "category": "Blocks", "image": "blocks/dispenser_front.png" },
    { "id": "dried_kelp_bottom", "name": "Dried Kelp Bottom", "category": "Blocks", "image": "blocks/dried_kelp_bottom.png" },
    { "id": "dripstone_block", "name": "Dripstone Block", "category": "Blocks", "image": "blocks/dripstone_block.png" },
    { "id": "dropper_front", "name": "Dropper Front", "category": "Blocks", "image": "blocks/dropper_front.png" },
    { "id": "emerald_block", "name": "Emerald Block", "category": "Blocks", "image": "blocks/emerald_block.png" },
    { "id": "enchanting_table_bottom", "name": "Enchanting Table Bottom", "category": "Blocks", "image": "blocks/enchanting_table_bottom.png" },
    { "id": "enchanting_table_side", "name": "Enchanting Table Side", "category": "Blocks", "image": "blocks/enchanting_table_side.png" },
    { "id": "end_portal_frame_side", "name": "End Portal Frame Side", "category": "Blocks", "image": "blocks/end_portal_frame_side.png" },
    { "id": "end_stone", "name": "End Stone", "category": "Blocks", "image": "blocks/end_stone.png" },
    { "id": "end_stone_bricks", "name": "End Stone Bricks", "category": "Blocks", "image": "blocks/end_stone_bricks.png" },
    { "id": "exposed_chiseled_copper", "name": "Exposed Chiseled Copper", "category": "Blocks", "image": "blocks/exposed_chiseled_copper.png" },
    { "id": "exposed_copper", "name": "Exposed Copper", "category": "Blocks", "image": "blocks/exposed_copper.png" },
    { "id": "exposed_copper_bulb", "name": "Exposed Copper Bulb", "category": "Blocks", "image": "blocks/exposed_copper_bulb.png" },
    { "id": "exposed_copper_bulb_lit", "name": "Exposed Copper Bulb Lit", "category": "Blocks", "image": "blocks/exposed_copper_bulb_lit.png" },
    { "id": "exposed_copper_bulb_lit_powered", "name": "Exposed Copper Bulb Lit Powered", "category": "Blocks", "image": "blocks/exposed_copper_bulb_lit_powered.png" },
    { "id": "exposed_copper_bulb_powered", "name": "Exposed Copper Bulb Powered", "category": "Blocks", "image": "blocks/exposed_copper_bulb_powered.png" },
    { "id": "exposed_copper_grate", "name": "Exposed Copper Grate", "category": "Blocks", "image": "blocks/exposed_copper_grate.png" },
    { "id": "exposed_copper_trapdoor", "name": "Exposed Copper Trapdoor", "category": "Blocks", "image": "blocks/exposed_copper_trapdoor.png" },
    { "id": "exposed_cut_copper", "name": "Exposed Cut Copper", "category": "Blocks", "image": "blocks/exposed_cut_copper.png" },
    { "id": "fire_coral_block", "name": "Fire Coral Block", "category": "Blocks", "image": "blocks/fire_coral_block.png" },
    { "id": "flowering_azalea_leaves", "name": "Flowering Azalea Leaves", "category": "Blocks", "image": "blocks/flowering_azalea_leaves.png" },
    { "id": "frosted_ice_0", "name": "Frosted Ice 0", "category": "Blocks", "image": "blocks/frosted_ice_0.png" },
    { "id": "furnace_front", "name": "Furnace Front", "category": "Blocks", "image": "blocks/furnace_front.png" },
    { "id": "gilded_blackstone", "name": "Gilded Blackstone", "category": "Blocks", "image": "blocks/gilded_blackstone.png" },
    { "id": "glass", "name": "Glass", "category": "Blocks", "image": "blocks/glass.png" },
    { "id": "glowstone", "name": "Glowstone", "category": "Blocks", "image": "blocks/glowstone.png" },
    { "id": "gold_block", "name": "Gold Block", "category": "Blocks", "image": "blocks/gold_block.png" },
    { "id": "gold_ore", "name": "Gold Ore", "category": "Blocks", "image": "blocks/gold_ore.png" },
    { "id": "granite", "name": "Granite", "category": "Blocks", "image": "blocks/granite.png" },
    { "id": "grass_block_side", "name": "Grass Block Side", "category": "Blocks", "image": "blocks/grass_block_side.png" },
    { "id": "grass_block_snow", "name": "Grass Block Snow", "category": "Blocks", "image": "blocks/grass_block_snow.png" },
    { "id": "gravel", "name": "Gravel", "category": "Blocks", "image": "blocks/gravel.png" },
    { "id": "gray_concrete", "name": "Gray Concrete", "category": "Blocks", "image": "blocks/gray_concrete.png" },
    { "id": "gray_concrete_powder", "name": "Gray Concrete Powder", "category": "Blocks", "image": "blocks/gray_concrete_powder.png" },
    { "id": "gray_glazed_terracotta", "name": "Gray Glazed Terracotta", "category": "Blocks", "image": "blocks/gray_glazed_terracotta.png" },
    { "id": "gray_shulker_box", "name": "Gray Shulker Box", "category": "Blocks", "image": "blocks/gray_shulker_box.png" },
    { "id": "gray_stained_glass", "name": "Gray Stained Glass", "category": "Blocks", "image": "blocks/gray_stained_glass.png" },
    { "id": "gray_terracotta", "name": "Gray Terracotta", "category": "Blocks", "image": "blocks/gray_terracotta.png" },
    { "id": "gray_wool", "name": "Gray Wool", "category": "Blocks", "image": "blocks/gray_wool.png" },
    { "id": "green_concrete", "name": "Green Concrete", "category": "Blocks", "image": "blocks/green_concrete.png" },
    { "id": "green_concrete_powder", "name": "Green Concrete Powder", "category": "Blocks", "image": "blocks/green_concrete_powder.png" },
    { "id": "green_glazed_terracotta", "name": "Green Glazed Terracotta", "category": "Blocks", "image": "blocks/green_glazed_terracotta.png" },
    { "id": "green_shulker_box", "name": "Green Shulker Box", "category": "Blocks", "image": "blocks/green_shulker_box.png" },
    { "id": "green_stained_glass", "name": "Green Stained Glass", "category": "Blocks", "image": "blocks/green_stained_glass.png" },
    { "id": "green_terracotta", "name": "Green Terracotta", "category": "Blocks", "image": "blocks/green_terracotta.png" },
    { "id": "green_wool", "name": "Green Wool", "category": "Blocks", "image": "blocks/green_wool.png" },
    { "id": "hay_block_side", "name": "Hay Block Side", "category": "Blocks", "image": "blocks/hay_block_side.png" },
    { "id": "honeycomb_block", "name": "Honeycomb Block", "category": "Blocks", "image": "blocks/honeycomb_block.png" },
    { "id": "honey_block_side", "name": "Honey Block Side", "category": "Blocks", "image": "blocks/honey_block_side.png" },
    { "id": "horn_coral_block", "name": "Horn Coral Block", "category": "Blocks", "image": "blocks/horn_coral_block.png" },
    { "id": "ice", "name": "Ice", "category": "Blocks", "image": "blocks/ice.png" },
    { "id": "iron_bars", "name": "Iron Bars", "category": "Blocks", "image": "blocks/iron_bars.png" },
    { "id": "iron_block", "name": "Iron Block", "category": "Blocks", "image": "blocks/iron_block.png" },
    { "id": "iron_ore", "name": "Iron Ore", "category": "Blocks", "image": "blocks/iron_ore.png" },
    { "id": "iron_trapdoor", "name": "Iron Trapdoor", "category": "Blocks", "image": "blocks/iron_trapdoor.png" },
    { "id": "jack_o_lantern", "name": "Jack O Lantern", "category": "Blocks", "image": "blocks/jack_o_lantern.png" },
    { "id": "jukebox_side", "name": "Jukebox Side", "category": "Blocks", "image": "blocks/jukebox_side.png" },
    { "id": "jungle_leaves", "name": "Jungle Leaves", "category": "Blocks", "image": "blocks/jungle_leaves.png" },
    { "id": "jungle_log", "name": "Jungle Log", "category": "Blocks", "image": "blocks/jungle_log.png" },
    { "id": "jungle_planks", "name": "Jungle Planks", "category": "Blocks", "image": "blocks/jungle_planks.png" },
    { "id": "jungle_trapdoor", "name": "Jungle Trapdoor", "category": "Blocks", "image": "blocks/jungle_trapdoor.png" },
    { "id": "ladder", "name": "Ladder", "category": "Blocks", "image": "blocks/ladder.png" },
    { "id": "lapis_block", "name": "Lapis Block", "category": "Blocks", "image": "blocks/lapis_block.png" },
    { "id": "lapis_ore", "name": "Lapis Ore", "category": "Blocks", "image": "blocks/lapis_ore.png" },
    { "id": "light_blue_concrete", "name": "Light Blue Concrete", "category": "Blocks", "image": "blocks/light_blue_concrete.png" },
    { "id": "light_blue_concrete_powder", "name": "Light Blue Concrete Powder", "category": "Blocks", "image": "blocks/light_blue_concrete_powder.png" },
    { "id": "light_blue_glazed_terracotta", "name": "Light Blue Glazed Terracotta", "category": "Blocks", "image": "blocks/light_blue_glazed_terracotta.png" },
    { "id": "light_blue_shulker_box", "name": "Light Blue Shulker Box", "category": "Blocks", "image": "blocks/light_blue_shulker_box.png" },
    { "id": "light_blue_stained_glass", "name": "Light Blue Stained Glass", "category": "Blocks", "image": "blocks/light_blue_stained_glass.png" },
    { "id": "light_blue_terracotta", "name": "Light Blue Terracotta", "category": "Blocks", "image": "blocks/light_blue_terracotta.png" },
    { "id": "light_blue_wool", "name": "Light Blue Wool", "category": "Blocks", "image": "blocks/light_blue_wool.png" },
    { "id": "light_gray_concrete", "name": "Light Gray Concrete", "category": "Blocks", "image": "blocks/light_gray_concrete.png" },
    { "id": "light_gray_concrete_powder", "name": "Light Gray Concrete Powder", "category": "Blocks", "image": "blocks/light_gray_concrete_powder.png" },
    { "id": "light_gray_glazed_terracotta", "name": "Light Gray Glazed Terracotta", "category": "Blocks", "image": "blocks/light_gray_glazed_terracotta.png" },
    { "id": "light_gray_shulker_box", "name": "Light Gray Shulker Box", "category": "Blocks", "image": "blocks/light_gray_shulker_box.png" },
    { "id": "light_gray_stained_glass", "name": "Light Gray Stained Glass", "category": "Blocks", "image": "blocks/light_gray_stained_glass.png" },
    { "id": "light_gray_terracotta", "name": "Light Gray Terracotta", "category": "Blocks", "image": "blocks/light_gray_terracotta.png" },
    { "id": "light_gray_wool", "name": "Light Gray Wool", "category": "Blocks", "image": "blocks/light_gray_wool.png" },
    { "id": "lime_concrete", "name": "Lime Concrete", "category": "Blocks", "image": "blocks/lime_concrete.png" },
    { "id": "lime_concrete_powder", "name": "Lime Concrete Powder", "category": "Blocks", "image": "blocks/lime_concrete_powder.png" },
    { "id": "lime_glazed_terracotta", "name": "Lime Glazed Terracotta", "category": "Blocks", "image": "blocks/lime_glazed_terracotta.png" },
    { "id": "lime_shulker_box", "name": "Lime Shulker Box", "category": "Blocks", "image": "blocks/lime_shulker_box.png" },
    { "id": "lime_stained_glass", "name": "Lime Stained Glass", "category": "Blocks", "image": "blocks/lime_stained_glass.png" },
    { "id": "lime_terracotta", "name": "Lime Terracotta", "category": "Blocks", "image": "blocks/lime_terracotta.png" },
    { "id": "lime_wool", "name": "Lime Wool", "category": "Blocks", "image": "blocks/lime_wool.png" },
    { "id": "magenta_concrete", "name": "Magenta Concrete", "category": "Blocks", "image": "blocks/magenta_concrete.png" },
    { "id": "magenta_concrete_powder", "name": "Magenta Concrete Powder", "category": "Blocks", "image": "blocks/magenta_concrete_powder.png" },
    { "id": "magenta_glazed_terracotta", "name": "Magenta Glazed Terracotta", "category": "Blocks", "image": "blocks/magenta_glazed_terracotta.png" },
    { "id": "magenta_shulker_box", "name": "Magenta Shulker Box", "category": "Blocks", "image": "blocks/magenta_shulker_box.png" },
    { "id": "magenta_stained_glass", "name": "Magenta Stained Glass", "category": "Blocks", "image": "blocks/magenta_stained_glass.png" },
    { "id": "magenta_terracotta", "name": "Magenta Terracotta", "category": "Blocks", "image": "blocks/magenta_terracotta.png" },
    { "id": "magenta_wool", "name": "Magenta Wool", "category": "Blocks", "image": "blocks/magenta_wool.png" },
    { "id": "mangrove_leaves", "name": "Mangrove Leaves", "category": "Blocks", "image": "blocks/mangrove_leaves.png" },
    { "id": "mangrove_log", "name": "Mangrove Log", "category": "Blocks", "image": "blocks/mangrove_log.png" },
    { "id": "mangrove_planks", "name": "Mangrove Planks", "category": "Blocks", "image": "blocks/mangrove_planks.png" },
    { "id": "mangrove_roots_side", "name": "Mangrove Roots Side", "category": "Blocks", "image": "blocks/mangrove_roots_side.png" },
    { "id": "mangrove_trapdoor", "name": "Mangrove Trapdoor", "category": "Blocks", "image": "blocks/mangrove_trapdoor.png" },
    { "id": "melon_side", "name": "Melon Side", "category": "Blocks", "image": "blocks/melon_side.png" },
    { "id": "mossy_cobblestone", "name": "Mossy Cobblestone", "category": "Blocks", "image": "blocks/mossy_cobblestone.png" },
    { "id": "mossy_stone_bricks", "name": "Mossy Stone Bricks", "category": "Blocks", "image": "blocks/mossy_stone_bricks.png" },
    { "id": "moss_block", "name": "Moss Block", "category": "Blocks", "image": "blocks/moss_block.png" },
    { "id": "mud", "name": "Mud", "category": "Blocks", "image": "blocks/mud.png" },
    { "id": "muddy_mangrove_roots_side", "name": "Muddy Mangrove Roots Side", "category": "Blocks", "image": "blocks/muddy_mangrove_roots_side.png" },
    { "id": "mud_bricks", "name": "Mud Bricks", "category": "Blocks", "image": "blocks/mud_bricks.png" },
    { "id": "mushroom_stem", "name": "Mushroom Stem", "category": "Blocks", "image": "blocks/mushroom_stem.png" },
    { "id": "mycelium_side", "name": "Mycelium Side", "category": "Blocks", "image": "blocks/mycelium_side.png" },
    { "id": "netherite_block", "name": "Netherite Block", "category": "Blocks", "image": "blocks/netherite_block.png" },
    { "id": "netherrack", "name": "Netherrack", "category": "Blocks", "image": "blocks/netherrack.png" },
    { "id": "nether_bricks", "name": "Nether Bricks", "category": "Blocks", "image": "blocks/nether_bricks.png" },
    { "id": "nether_gold_ore", "name": "Nether Gold Ore", "category": "Blocks", "image": "blocks/nether_gold_ore.png" },
    { "id": "nether_quartz_ore", "name": "Nether Quartz Ore", "category": "Blocks", "image": "blocks/nether_quartz_ore.png" },
    { "id": "nether_wart_block", "name": "Nether Wart Block", "category": "Blocks", "image": "blocks/nether_wart_block.png" },
    { "id": "note_block", "name": "Note Block", "category": "Blocks", "image": "blocks/note_block.png" },
    { "id": "oak_log", "name": "Oak Log", "category": "Blocks", "image": "blocks/oak_log.png" },
    { "id": "oak_planks", "name": "Oak Planks", "category": "Blocks", "image": "blocks/oak_planks.png" },
    { "id": "oak_trapdoor", "name": "Oak Trapdoor", "category": "Blocks", "image": "blocks/oak_trapdoor.png" },
    { "id": "observer_front", "name": "Observer Front", "category": "Blocks", "image": "blocks/observer_front.png" },
    { "id": "obsidian", "name": "Obsidian", "category": "Blocks", "image": "blocks/obsidian.png" },
    { "id": "ochre_froglight_side", "name": "Ochre Froglight Side", "category": "Blocks", "image": "blocks/ochre_froglight_side.png" },
    { "id": "orange_concrete", "name": "Orange Concrete", "category": "Blocks", "image": "blocks/orange_concrete.png" },
    { "id": "orange_concrete_powder", "name": "Orange Concrete Powder", "category": "Blocks", "image": "blocks/orange_concrete_powder.png" },
    { "id": "orange_glazed_terracotta", "name": "Orange Glazed Terracotta", "category": "Blocks", "image": "blocks/orange_glazed_terracotta.png" },
    { "id": "orange_shulker_box", "name": "Orange Shulker Box", "category": "Blocks", "image": "blocks/orange_shulker_box.png" },
    { "id": "orange_stained_glass", "name": "Orange Stained Glass", "category": "Blocks", "image": "blocks/orange_stained_glass.png" },
    { "id": "orange_terracotta", "name": "Orange Terracotta", "category": "Blocks", "image": "blocks/orange_terracotta.png" },
    { "id": "orange_wool", "name": "Orange Wool", "category": "Blocks", "image": "blocks/orange_wool.png" },
    { "id": "oxidized_chiseled_copper", "name": "Oxidized Chiseled Copper", "category": "Blocks", "image": "blocks/oxidized_chiseled_copper.png" },
    { "id": "oxidized_copper", "name": "Oxidized Copper", "category": "Blocks", "image": "blocks/oxidized_copper.png" },
    { "id": "oxidized_copper_bulb", "name": "Oxidized Copper Bulb", "category": "Blocks", "image": "blocks/oxidized_copper_bulb.png" },
    { "id": "oxidized_copper_bulb_lit", "name": "Oxidized Copper Bulb Lit", "category": "Blocks", "image": "blocks/oxidized_copper_bulb_lit.png" },
    { "id": "oxidized_copper_bulb_lit_powered", "name": "Oxidized Copper Bulb Lit Powered", "category": "Blocks", "image": "blocks/oxidized_copper_bulb_lit_powered.png" },
    { "id": "oxidized_copper_bulb_powered", "name": "Oxidized Copper Bulb Powered", "category": "Blocks", "image": "blocks/oxidized_copper_bulb_powered.png" },
    { "id": "oxidized_copper_door_bottom", "name": "Oxidized Copper Door Bottom", "category": "Blocks", "image": "blocks/oxidized_copper_door_bottom.png" },
    { "id": "oxidized_copper_door_top", "name": "Oxidized Copper Door Top", "category": "Blocks", "image": "blocks/oxidized_copper_door_top.png" },
    { "id": "oxidized_copper_grate", "name": "Oxidized Copper Grate", "category": "Blocks", "image": "blocks/oxidized_copper_grate.png" },
    { "id": "oxidized_copper_trapdoor", "name": "Oxidized Copper Trapdoor", "category": "Blocks", "image": "blocks/oxidized_copper_trapdoor.png" },
    { "id": "oxidized_cut_copper", "name": "Oxidized Cut Copper", "category": "Blocks", "image": "blocks/oxidized_cut_copper.png" },
    { "id": "packed_ice", "name": "Packed Ice", "category": "Blocks", "image": "blocks/packed_ice.png" },
    { "id": "packed_mud", "name": "Packed Mud", "category": "Blocks", "image": "blocks/packed_mud.png" },
    { "id": "pale_moss_block", "name": "Pale Moss Block", "category": "Blocks", "image": "blocks/pale_moss_block.png" },
    { "id": "pale_moss_carpet", "name": "Pale Moss Carpet", "category": "Blocks", "image": "blocks/pale_moss_carpet.png" },
    { "id": "pale_oak_log", "name": "Pale Oak Log", "category": "Blocks", "image": "blocks/pale_oak_log.png" },
    { "id": "pale_oak_planks", "name": "Pale Oak Planks", "category": "Blocks", "image": "blocks/pale_oak_planks.png" },
    { "id": "pink_concrete", "name": "Pink Concrete", "category": "Blocks", "image": "blocks/pink_concrete.png" },
    { "id": "pink_concrete_powder", "name": "Pink Concrete Powder", "category": "Blocks", "image": "blocks/pink_concrete_powder.png" },
    { "id": "pink_glazed_terracotta", "name": "Pink Glazed Terracotta", "category": "Blocks", "image": "blocks/pink_glazed_terracotta.png" },
    { "id": "pink_petals", "name": "Pink Petals", "category": "Blocks", "image": "blocks/pink_petals.png" },
    { "id": "pink_shulker_box", "name": "Pink Shulker Box", "category": "Blocks", "image": "blocks/pink_shulker_box.png" },
    { "id": "pink_stained_glass", "name": "Pink Stained Glass", "category": "Blocks", "image": "blocks/pink_stained_glass.png" },
    { "id": "pink_terracotta", "name": "Pink Terracotta", "category": "Blocks", "image": "blocks/pink_terracotta.png" },
    { "id": "pink_wool", "name": "Pink Wool", "category": "Blocks", "image": "blocks/pink_wool.png" },
    { "id": "piston_top", "name": "Piston Top", "category": "Blocks", "image": "blocks/piston_top.png" },
    { "id": "piston_top_sticky", "name": "Piston Top Sticky", "category": "Blocks", "image": "blocks/piston_top_sticky.png" },
    { "id": "podzol_side", "name": "Podzol Side", "category": "Blocks", "image": "blocks/podzol_side.png" },
    { "id": "polished_andesite", "name": "Polished Andesite", "category": "Blocks", "image": "blocks/polished_andesite.png" },
    { "id": "polished_basalt_side", "name": "Polished Basalt Side", "category": "Blocks", "image": "blocks/polished_basalt_side.png" },
    { "id": "polished_blackstone", "name": "Polished Blackstone", "category": "Blocks", "image": "blocks/polished_blackstone.png" },
    { "id": "polished_blackstone_bricks", "name": "Polished Blackstone Bricks", "category": "Blocks", "image": "blocks/polished_blackstone_bricks.png" },
    { "id": "polished_deepslate", "name": "Polished Deepslate", "category": "Blocks", "image": "blocks/polished_deepslate.png" },
    { "id": "polished_diorite", "name": "Polished Diorite", "category": "Blocks", "image": "blocks/polished_diorite.png" },
    { "id": "polished_granite", "name": "Polished Granite", "category": "Blocks", "image": "blocks/polished_granite.png" },
    { "id": "polished_tuff", "name": "Polished Tuff", "category": "Blocks", "image": "blocks/polished_tuff.png" },
    { "id": "prismarine_bricks", "name": "Prismarine Bricks", "category": "Blocks", "image": "blocks/prismarine_bricks.png" },
    { "id": "pumpkin_side", "name": "Pumpkin Side", "category": "Blocks", "image": "blocks/pumpkin_side.png" },
    { "id": "purple_concrete", "name": "Purple Concrete", "category": "Blocks", "image": "blocks/purple_concrete.png" },
    { "id": "purple_concrete_powder", "name": "Purple Concrete Powder", "category": "Blocks", "image": "blocks/purple_concrete_powder.png" },
    { "id": "purple_glazed_terracotta", "name": "Purple Glazed Terracotta", "category": "Blocks", "image": "blocks/purple_glazed_terracotta.png" },
    { "id": "purple_shulker_box", "name": "Purple Shulker Box", "category": "Blocks", "image": "blocks/purple_shulker_box.png" },
    { "id": "purple_stained_glass", "name": "Purple Stained Glass", "category": "Blocks", "image": "blocks/purple_stained_glass.png" },
    { "id": "purple_terracotta", "name": "Purple Terracotta", "category": "Blocks", "image": "blocks/purple_terracotta.png" },
    { "id": "purple_wool", "name": "Purple Wool", "category": "Blocks", "image": "blocks/purple_wool.png" },
    { "id": "purpur_block", "name": "Purpur Block", "category": "Blocks", "image": "blocks/purpur_block.png" },
    { "id": "purpur_pillar", "name": "Purpur Pillar", "category": "Blocks", "image": "blocks/purpur_pillar.png" },
    { "id": "quartz_bricks", "name": "Quartz Bricks", "category": "Blocks", "image": "blocks/quartz_bricks.png" },
    { "id": "quartz_pillar", "name": "Quartz Pillar", "category": "Blocks", "image": "blocks/quartz_pillar.png" },
    { "id": "raw_copper_block", "name": "Raw Copper Block", "category": "Blocks", "image": "blocks/raw_copper_block.png" },
    { "id": "raw_gold_block", "name": "Raw Gold Block", "category": "Blocks", "image": "blocks/raw_gold_block.png" },
    { "id": "raw_iron_block", "name": "Raw Iron Block", "category": "Blocks", "image": "blocks/raw_iron_block.png" },
    { "id": "redstone_block", "name": "Redstone Block", "category": "Blocks", "image": "blocks/redstone_block.png" },
    { "id": "redstone_dust_overlay", "name": "Redstone Dust Overlay", "category": "Blocks", "image": "blocks/redstone_dust_overlay.png" },
    { "id": "redstone_lamp", "name": "Redstone Lamp", "category": "Blocks", "image": "blocks/redstone_lamp.png" },
    { "id": "redstone_ore", "name": "Redstone Ore", "category": "Blocks", "image": "blocks/redstone_ore.png" },
    { "id": "red_concrete", "name": "Red Concrete", "category": "Blocks", "image": "blocks/red_concrete.png" },
    { "id": "red_concrete_powder", "name": "Red Concrete Powder", "category": "Blocks", "image": "blocks/red_concrete_powder.png" },
    { "id": "red_glazed_terracotta", "name": "Red Glazed Terracotta", "category": "Blocks", "image": "blocks/red_glazed_terracotta.png" },
    { "id": "red_mushroom_block", "name": "Red Mushroom Block", "category": "Blocks", "image": "blocks/red_mushroom_block.png" },
    { "id": "red_nether_bricks", "name": "Red Nether Bricks", "category": "Blocks", "image": "blocks/red_nether_bricks.png" },
    { "id": "red_sand", "name": "Red Sand", "category": "Blocks", "image": "blocks/red_sand.png" },
    { "id": "red_sandstone", "name": "Red Sandstone", "category": "Blocks", "image": "blocks/red_sandstone.png" },
    { "id": "red_sandstone_bottom", "name": "Red Sandstone Bottom", "category": "Blocks", "image": "blocks/red_sandstone_bottom.png" },
    { "id": "red_sandstone_top", "name": "Red Sandstone Top", "category": "Blocks", "image": "blocks/red_sandstone_top.png" },
    { "id": "red_shulker_box", "name": "Red Shulker Box", "category": "Blocks", "image": "blocks/red_shulker_box.png" },
    { "id": "red_stained_glass", "name": "Red Stained Glass", "category": "Blocks", "image": "blocks/red_stained_glass.png" },
    { "id": "red_terracotta", "name": "Red Terracotta", "category": "Blocks", "image": "blocks/red_terracotta.png" },
    { "id": "red_wool", "name": "Red Wool", "category": "Blocks", "image": "blocks/red_wool.png" },
    { "id": "reinforced_deepslate_side", "name": "Reinforced Deepslate Side", "category": "Blocks", "image": "blocks/reinforced_deepslate_side.png" },
    { "id": "resin_block", "name": "Resin Block", "category": "Blocks", "image": "blocks/resin_block.png" },
    { "id": "resin_bricks", "name": "Resin Bricks", "category": "Blocks", "image": "blocks/resin_bricks.png" },
    { "id": "respawn_anchor_side0", "name": "Respawn Anchor Side0", "category": "Blocks", "image": "blocks/respawn_anchor_side0.png" },
    { "id": "rooted_dirt", "name": "Rooted Dirt", "category": "Blocks", "image": "blocks/rooted_dirt.png" },
    { "id": "sand", "name": "Sand", "category": "Blocks", "image": "blocks/sand.png" },
    { "id": "sandstone", "name": "Sandstone", "category": "Blocks", "image": "blocks/sandstone.png" },
    { "id": "sandstone_bottom", "name": "Sandstone Bottom", "category": "Blocks", "image": "blocks/sandstone_bottom.png" },
    { "id": "scaffolding_top", "name": "Scaffolding Top", "category": "Blocks", "image": "blocks/scaffolding_top.png" },
    { "id": "sculk_catalyst_side", "name": "Sculk Catalyst Side", "category": "Blocks", "image": "blocks/sculk_catalyst_side.png" },
    { "id": "sculk_shrieker_bottom", "name": "Sculk Shrieker Bottom", "category": "Blocks", "image": "blocks/sculk_shrieker_bottom.png" },
    { "id": "sculk_shrieker_side", "name": "Sculk Shrieker Side", "category": "Blocks", "image": "blocks/sculk_shrieker_side.png" },
    { "id": "shroomlight", "name": "Shroomlight", "category": "Blocks", "image": "blocks/shroomlight.png" },
    { "id": "shulker_box", "name": "Shulker Box", "category": "Blocks", "image": "blocks/shulker_box.png" },
    { "id": "slime_block", "name": "Slime Block", "category": "Blocks", "image": "blocks/slime_block.png" },
    { "id": "smithing_table_front", "name": "Smithing Table Front", "category": "Blocks", "image": "blocks/smithing_table_front.png" },
    { "id": "smoker_front", "name": "Smoker Front", "category": "Blocks", "image": "blocks/smoker_front.png" },
    { "id": "smooth_basalt", "name": "Smooth Basalt", "category": "Blocks", "image": "blocks/smooth_basalt.png" },
    { "id": "smooth_stone", "name": "Smooth Stone", "category": "Blocks", "image": "blocks/smooth_stone.png" },
    { "id": "snow", "name": "Snow", "category": "Blocks", "image": "blocks/snow.png" },
    { "id": "soul_sand", "name": "Soul Sand", "category": "Blocks", "image": "blocks/soul_sand.png" },
    { "id": "soul_soil", "name": "Soul Soil", "category": "Blocks", "image": "blocks/soul_soil.png" },
    { "id": "spawner", "name": "Spawner", "category": "Blocks", "image": "blocks/spawner.png" },
    { "id": "sponge", "name": "Sponge", "category": "Blocks", "image": "blocks/sponge.png" },
    { "id": "spruce_leaves", "name": "Spruce Leaves", "category": "Blocks", "image": "blocks/spruce_leaves.png" },
    { "id": "spruce_log", "name": "Spruce Log", "category": "Blocks", "image": "blocks/spruce_log.png" },
    { "id": "spruce_planks", "name": "Spruce Planks", "category": "Blocks", "image": "blocks/spruce_planks.png" },
    { "id": "stone", "name": "Stone", "category": "Blocks", "image": "blocks/stone.png" },
    { "id": "stone_bricks", "name": "Stone Bricks", "category": "Blocks", "image": "blocks/stone_bricks.png" },
    { "id": "stripped_acacia_log", "name": "Stripped Acacia Log", "category": "Blocks", "image": "blocks/stripped_acacia_log.png" },
    { "id": "stripped_bamboo_block", "name": "Stripped Bamboo Block", "category": "Blocks", "image": "blocks/stripped_bamboo_block.png" },
    { "id": "stripped_birch_log", "name": "Stripped Birch Log", "category": "Blocks", "image": "blocks/stripped_birch_log.png" },
    { "id": "stripped_cherry_log", "name": "Stripped Cherry Log", "category": "Blocks", "image": "blocks/stripped_cherry_log.png" },
    { "id": "stripped_dark_oak_log", "name": "Stripped Dark Oak Log", "category": "Blocks", "image": "blocks/stripped_dark_oak_log.png" },
    { "id": "stripped_jungle_log", "name": "Stripped Jungle Log", "category": "Blocks", "image": "blocks/stripped_jungle_log.png" },
    { "id": "stripped_mangrove_log", "name": "Stripped Mangrove Log", "category": "Blocks", "image": "blocks/stripped_mangrove_log.png" },
    { "id": "stripped_oak_log", "name": "Stripped Oak Log", "category": "Blocks", "image": "blocks/stripped_oak_log.png" },
    { "id": "stripped_pale_oak_log", "name": "Stripped Pale Oak Log", "category": "Blocks", "image": "blocks/stripped_pale_oak_log.png" },
    { "id": "stripped_spruce_log", "name": "Stripped Spruce Log", "category": "Blocks", "image": "blocks/stripped_spruce_log.png" },
    { "id": "sweet_berry_bush_stage3", "name": "Sweet Berry Bush Stage3", "category": "Blocks", "image": "blocks/sweet_berry_bush_stage3.png" },
    { "id": "target_side", "name": "Target Side", "category": "Blocks", "image": "blocks/target_side.png" },
    { "id": "terracotta", "name": "Terracotta", "category": "Blocks", "image": "blocks/terracotta.png" },
    { "id": "tinted_glass", "name": "Tinted Glass", "category": "Blocks", "image": "blocks/tinted_glass.png" },
    { "id": "tnt_side", "name": "Tnt Side", "category": "Blocks", "image": "blocks/tnt_side.png" },
    { "id": "tuff", "name": "Tuff", "category": "Blocks", "image": "blocks/tuff.png" },
    { "id": "tuff_bricks", "name": "Tuff Bricks", "category": "Blocks", "image": "blocks/tuff_bricks.png" },
    { "id": "verdant_froglight_side", "name": "Verdant Froglight Side", "category": "Blocks", "image": "blocks/verdant_froglight_side.png" },
    { "id": "warped_nylium_side", "name": "Warped Nylium Side", "category": "Blocks", "image": "blocks/warped_nylium_side.png" },
    { "id": "warped_planks", "name": "Warped Planks", "category": "Blocks", "image": "blocks/warped_planks.png" },
    { "id": "warped_trapdoor", "name": "Warped Trapdoor", "category": "Blocks", "image": "blocks/warped_trapdoor.png" },
    { "id": "weathered_chiseled_copper", "name": "Weathered Chiseled Copper", "category": "Blocks", "image": "blocks/weathered_chiseled_copper.png" },
    { "id": "weathered_copper", "name": "Weathered Copper", "category": "Blocks", "image": "blocks/weathered_copper.png" },
    { "id": "weathered_copper_bulb", "name": "Weathered Copper Bulb", "category": "Blocks", "image": "blocks/weathered_copper_bulb.png" },
    { "id": "weathered_copper_bulb_lit", "name": "Weathered Copper Bulb Lit", "category": "Blocks", "image": "blocks/weathered_copper_bulb_lit.png" },
    { "id": "weathered_copper_bulb_lit_powered", "name": "Weathered Copper Bulb Lit Powered", "category": "Blocks", "image": "blocks/weathered_copper_bulb_lit_powered.png" },
    { "id": "weathered_copper_bulb_powered", "name": "Weathered Copper Bulb Powered", "category": "Blocks", "image": "blocks/weathered_copper_bulb_powered.png" },
    { "id": "weathered_copper_grate", "name": "Weathered Copper Grate", "category": "Blocks", "image": "blocks/weathered_copper_grate.png" },
    { "id": "weathered_copper_trapdoor", "name": "Weathered Copper Trapdoor", "category": "Blocks", "image": "blocks/weathered_copper_trapdoor.png" },
    { "id": "weathered_cut_copper", "name": "Weathered Cut Copper", "category": "Blocks", "image": "blocks/weathered_cut_copper.png" },
    { "id": "wet_sponge", "name": "Wet Sponge", "category": "Blocks", "image": "blocks/wet_sponge.png" },
    { "id": "white_concrete", "name": "White Concrete", "category": "Blocks", "image": "blocks/white_concrete.png" },
    { "id": "white_concrete_powder", "name": "White Concrete Powder", "category": "Blocks", "image": "blocks/white_concrete_powder.png" },
    { "id": "white_glazed_terracotta", "name": "White Glazed Terracotta", "category": "Blocks", "image": "blocks/white_glazed_terracotta.png" },
    { "id": "white_shulker_box", "name": "White Shulker Box", "category": "Blocks", "image": "blocks/white_shulker_box.png" },
    { "id": "white_stained_glass", "name": "White Stained Glass", "category": "Blocks", "image": "blocks/white_stained_glass.png" },
    { "id": "white_terracotta", "name": "White Terracotta", "category": "Blocks", "image": "blocks/white_terracotta.png" },
    { "id": "white_wool", "name": "White Wool", "category": "Blocks", "image": "blocks/white_wool.png" },
    { "id": "yellow_concrete", "name": "Yellow Concrete", "category": "Blocks", "image": "blocks/yellow_concrete.png" },
    { "id": "yellow_concrete_powder", "name": "Yellow Concrete Powder", "category": "Blocks", "image": "blocks/yellow_concrete_powder.png" },
    { "id": "yellow_glazed_terracotta", "name": "Yellow Glazed Terracotta", "category": "Blocks", "image": "blocks/yellow_glazed_terracotta.png" },
    { "id": "yellow_shulker_box", "name": "Yellow Shulker Box", "category": "Blocks", "image": "blocks/yellow_shulker_box.png" },
    { "id": "yellow_stained_glass", "name": "Yellow Stained Glass", "category": "Blocks", "image": "blocks/yellow_stained_glass.png" },
    { "id": "yellow_terracotta", "name": "Yellow Terracotta", "category": "Blocks", "image": "blocks/yellow_terracotta.png" },
    { "id": "yellow_wool", "name": "Yellow Wool", "category": "Blocks", "image": "blocks/yellow_wool.png" }
];

// 2. حالات العناصر (ثلاث حالات)
// 'items' = متبقية, 'working' = قيد العمل, 'done' = منتهية
let itemStatus = JSON.parse(localStorage.getItem("mc_item_status")) || {};

// تهيئة الحالة الافتراضية للعناصر الجديدة
allItems.forEach(item => {
    if (!itemStatus[item.id]) {
        itemStatus[item.id] = 'items'; // الوضع الافتراضي: متبقية
    }
});

// 3. تشغيل الدالة فور تحميل الصفحة
// أضف هذا الحدث بعد تعريف window.onload أو داخله
window.onload = () => {
    render();
    
    // إضافة حدث زر إعادة التعيين
    const resetBtn = document.getElementById("reset-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", resetAllItems);
    }
};

// دالة إعادة تعيين جميع العناصر
function resetAllItems() {
    // تأكيد قبل المسح (اختياري)
function resetAllItems() {
    allItems.forEach(item => {
        itemStatus[item.id] = 'items';
    });
    
    localStorage.setItem("mc_item_status", JSON.stringify(itemStatus));
    
    const currentSearch = document.getElementById("search").value;
    render(currentSearch.toLowerCase());
    
    showToast(" All items have been reset!");
}
    
    // إعادة تعيين حالة جميع العناصر إلى 'items' (المتبقية)
    allItems.forEach(item => {
        itemStatus[item.id] = 'items';
    });
    
    // حفظ الحالة الجديدة في localStorage
    localStorage.setItem("mc_item_status", JSON.stringify(itemStatus));
    
    // إعادة الرسم
    const currentSearch = document.getElementById("search").value;
    render(currentSearch.toLowerCase());
    
    // (اختياري) عرض رسالة تأكيد
    showToast("All items have been reset!");
}

// (اختياري) دالة لعرض رسالة منبثقة صغيرة
function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #333;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        z-index: 1000;
        animation: fadeInOut 2s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}

// أضف هذا الـ animation في style.css
// @keyframes fadeInOut {
//     0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
//     15% { opacity: 1; transform: translateX(-50%) translateY(0); }
//     85% { opacity: 1; transform: translateX(-50%) translateY(0); }
//     100% { opacity: 0; transform: translateX(-50%) translateY(20px); }
// }
// 4. محرك البحث
document.getElementById("search").addEventListener("input", (e) => {
    render(e.target.value.toLowerCase());
});

// 5. السماح بالإفلات
function allowDrop(ev) {
    ev.preventDefault();
}

// 6. بدء السحب
function drag(ev, id) {
    ev.dataTransfer.setData("text/plain", id);
    ev.dataTransfer.effectAllowed = "move";
}

// 7. الإفلات ونقل العنصر بين الأقسام
function drop(ev, targetStatus) {
    ev.preventDefault();
    const draggedId = ev.dataTransfer.getData("text/plain");
    
    // تحديث حالة العنصر المسحوب
    if (draggedId && itemStatus[draggedId] !== targetStatus) {
        itemStatus[draggedId] = targetStatus;
        
        // حفظ التغييرات
        localStorage.setItem("mc_item_status", JSON.stringify(itemStatus));
        
        // إعادة الرسم مع الحفاظ على نص البحث
        const currentSearch = document.getElementById("search").value;
        render(currentSearch.toLowerCase());
    }
}

// 8. وظيفة الرسم الأساسية
function render(filter = "") {
    const itemsGrid = document.getElementById("items-grid");
    const workingGrid = document.getElementById("working-grid");
    const doneGrid = document.getElementById("done-grid");
    
    if(!itemsGrid || !workingGrid || !doneGrid) return;

    itemsGrid.innerHTML = "";
    workingGrid.innerHTML = "";
    doneGrid.innerHTML = "";

    let itemsCount = 0;
    let workingCount = 0;
    let doneCount = 0;

    allItems.forEach(item => {
        // تطبيق الفلتر
        if (filter && !item.name.toLowerCase().includes(filter)) return;
        
        const status = itemStatus[item.id] || 'items';
        const el = createItemElement(item, status);
        
        // وضع العنصر في القسم المناسب حسب حالته
        if (status === 'items') {
            itemsGrid.appendChild(el);
            itemsCount++;
        } else if (status === 'working') {
            workingGrid.appendChild(el);
            workingCount++;
        } else if (status === 'done') {
            doneGrid.appendChild(el);
            doneCount++;
        }
    });

    // تحديث العدادات
    document.getElementById("count-items").innerText = itemsCount;
    document.getElementById("count-working").innerText = workingCount;
    document.getElementById("count-done").innerText = doneCount;
}

// 9. إنشاء عنصر الأيتم مع دعم السحب والإفلات
function createItemElement(item, status) {
    const div = document.createElement("div");
    div.className = `item item-${status}`;
    div.id = `item-${item.id}`;
    div.setAttribute("draggable", "true");
    div.setAttribute("ondragstart", `drag(event, '${item.id}')`);
    div.title = item.name;

    // إضافة علامة مميزة حسب الحالة
    let statusIcon = '';
    if (status === 'working') statusIcon = '✘';
    else if (status === 'done') statusIcon = '✓  ';

    div.innerHTML = `
        <img src="${item.image}" onerror="this.src='https://via.placeholder.com/32?text=?'">
        <span>${statusIcon}${item.name}</span>
    `;

    return div;
}