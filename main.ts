namespace SpriteKind {
    export const Buildings = SpriteKind.create()
    export const floor = SpriteKind.create()
    export const splash = SpriteKind.create()
    export const tanks = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.floor, function (sprite, otherSprite) {
    playerSpeed = 10
    updateMovement()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (directionFacing == 1) {
        animation.runImageAnimation(
        playerMonster,
        [img`
            ......7777......
            .....7777777....
            ....7777777777..
            ....77777fff777.
            ..555777777ff777
            ...7777777777777
            ...7777777777777
            .555777777777777
            ...7777777575777
            ..77777775.5.577
            555777777.......
            ..77777775.5....
            ..77777777575...
            5557777777777...
            ..77777777777...
            ..77777777777...
            555777777777777.
            ..77777777777777
            ..7777777777...7
            555777777777..77
            ..7777777777.777
            ..7777777777....
            5557777777777...
            ..77777777777...
            ..777777777777..
            555777777777777.
            ..7777777777777.
            ..777777777.777.
            ..77777777..77..
            .77777777...77..
            77777.7777..777.
            7777..7757..775.
            `,img`
            ......7777......
            .....7777777....
            ....7777777777..
            ....77777fff777.
            ..555777777ff777
            ...7777777777777
            ...7777777777777
            .555777777777777
            ...7777777575777
            ..77777775.5.577
            555777777.......
            ..77777775.5....
            ..77777777575...
            5557777777777...
            ..77777777777...
            ..77777777777...
            555777777777777.
            ..77777777777777
            ..7777777777...7
            555777777777..77
            ..7777777777.777
            ..7777777777....
            5557777777777...
            ..77777777777...
            ..77777777777...
            5557777777777...
            ..77777777777...
            ..777777777.....
            ..7777777777....
            .77777777777....
            77777....777....
            7777.....775....
            `],
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        playerMonster,
        [img`
            ......7777......
            ....7777777.....
            ..7777777777....
            .777fff77777....
            777ff777777555..
            7777777777777...
            7777777777777...
            777777777777555.
            7775757777777...
            775.5.57777777..
            .......777777555
            ....5.57777777..
            ...57577777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            .777777777777555
            77777777777777..
            7...7777777777..
            77..777777777555
            777.7777777777..
            ....7777777777..
            ...7777777777555
            ...77777777777..
            ..777777777777..
            .777777777777555
            .7777777777777..
            .777.777777777..
            ..77..77777777..
            ..77...77777777.
            .777..7777.77777
            .577..7577..7777
            `,img`
            ......7777......
            ....7777777.....
            ..7777777777....
            .777fff77777....
            777ff777777555..
            7777777777777...
            7777777777777...
            777777777777555.
            7775757777777...
            775.5.57777777..
            .......777777555
            ....5.57777777..
            ...57577777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            .777777777777555
            77777777777777..
            7...7777777777..
            77..777777777555
            777.7777777777..
            ....7777777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            ...7777777777555
            ...77777777777..
            .....777777777..
            ....7777777777..
            ....77777777777.
            ....777....77777
            ....577.....7777
            `],
        500,
        true
        )
    }
})
function createDayCityLists () {
    ready_text_list = [
    "Destroy",
    "Burn",
    "Smash",
    "Crush",
    "Wipe out",
    "Ruin",
    "Demolish",
    "Obliterate",
    "Ravage",
    "Wreck"
    ]
    CityPrefix = [
    "Happy",
    "Fair",
    "Pleasant",
    "New",
    "San",
    "Fort",
    "Saint",
    "Grand",
    "Little",
    "North",
    "South",
    "East",
    "West",
    "Rich",
    "Sand"
    ]
    CitySuffix = [
    "burgh",
    "ville",
    " Falls",
    " Springs",
    " Beach",
    "land",
    "field",
    " City",
    " York",
    "view",
    "hampton",
    "center",
    "town",
    "hills"
    ]
}
function updateMovement () {
    controller.moveSprite(playerMonster, playerSpeed, playerSpeed)
}
function stompySounds () {
    if (!(playerMonster.vx == 0)) {
        music.thump.play()
        pause(500)
    }
    if (!(playerMonster.vy == 0)) {
        music.thump.play()
        pause(500)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.spooky.play()
    playerSpeed = 0
    updateMovement()
    playerMonster.say("RAWR", 1250)
    pause(1250)
    if (info.life() < 3) {
        info.changeLifeBy(1)
    }
    playerSpeed = 50
    updateMovement()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.spooky.play()
    playerSpeed = 0
    updateMovement()
    playerMonster.say("ROAR", 1250)
    pause(1250)
    if (info.life() < 3) {
        info.changeLifeBy(1)
    }
    playerSpeed = 50
    updateMovement()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerMonster,
    [img`
        ......7777......
        ....7777777.....
        ..7777777777....
        .777fff77777....
        777ff777777555..
        7777777777777...
        7777777777777...
        777777777777555.
        7775757777777...
        775.5.57777777..
        .......777777555
        ....5.57777777..
        ...57577777777..
        ...7777777777555
        ...77777777777..
        ...77777777777..
        .777777777777555
        77777777777777..
        7...7777777777..
        77..777777777555
        777.7777777777..
        ....7777777777..
        ...7777777777555
        ...77777777777..
        ..777777777777..
        .777777777777555
        .7777777777777..
        .777.777777777..
        ..77..77777777..
        ..77...77777777.
        .777..7777.77777
        .577..7577..7777
        `,img`
        ......7777......
        ....7777777.....
        ..7777777777....
        .777fff77777....
        777ff777777555..
        7777777777777...
        7777777777777...
        777777777777555.
        7775757777777...
        775.5.57777777..
        .......777777555
        ....5.57777777..
        ...57577777777..
        ...7777777777555
        ...77777777777..
        ...77777777777..
        .777777777777555
        77777777777777..
        7...7777777777..
        77..777777777555
        777.7777777777..
        ....7777777777..
        ...7777777777555
        ...77777777777..
        ...77777777777..
        ...7777777777555
        ...77777777777..
        .....777777777..
        ....7777777777..
        ....77777777777.
        ....777....77777
        ....577.....7777
        `],
    500,
    true
    )
    directionFacing = 0
})
function loadNextLevel () {
    stageNumber += 1
    scene.cameraFollowSprite(playerMonster)
    titleSplash = sprites.create(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `, SpriteKind.splash)
    titleSplash.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    game.splash("Day " + stageNumber, "" + ready_text_list._pickRandom() + " " + CityPrefix._pickRandom() + CitySuffix._pickRandom())
    titleSplash.destroy()
    for (let value of sprites.allOfKind(SpriteKind.floor)) {
        value.destroy()
        effects.clearParticles(value)
    }
    for (let value2 of sprites.allOfKind(SpriteKind.tanks)) {
        value2.destroy()
        effects.clearParticles(value2)
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    buildCity()
    spawnEnemies()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    playerMonster,
    [img`
        ......7777......
        .....7777777....
        ....7777777777..
        ....77777fff777.
        ..555777777ff777
        ...7777777777777
        ...7777777777777
        .555777777777777
        ...7777777575777
        ..77777775.5.577
        555777777.......
        ..77777775.5....
        ..77777777575...
        5557777777777...
        ..77777777777...
        ..77777777777...
        555777777777777.
        ..77777777777777
        ..7777777777...7
        555777777777..77
        ..7777777777.777
        ..7777777777....
        5557777777777...
        ..77777777777...
        ..777777777777..
        555777777777777.
        ..7777777777777.
        ..777777777.777.
        ..77777777..77..
        .77777777...77..
        77777.7777..777.
        7777..7757..775.
        `,img`
        ......7777......
        .....7777777....
        ....7777777777..
        ....77777fff777.
        ..555777777ff777
        ...7777777777777
        ...7777777777777
        .555777777777777
        ...7777777575777
        ..77777775.5.577
        555777777.......
        ..77777775.5....
        ..77777777575...
        5557777777777...
        ..77777777777...
        ..77777777777...
        555777777777777.
        ..77777777777777
        ..7777777777...7
        555777777777..77
        ..7777777777.777
        ..7777777777....
        5557777777777...
        ..77777777777...
        ..77777777777...
        5557777777777...
        ..77777777777...
        ..777777777.....
        ..7777777777....
        .77777777777....
        77777....777....
        7777.....775....
        `],
    500,
    true
    )
    directionFacing = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.knock.play()
})
function spawnEnemies () {
    for (let index = 0; index < Math.trunc(stageNumber / 3) + 1; index++) {
        Tank = sprites.create(img`
            f f f f f f f f f f f f f f f f 
            f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
            f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
            f f f f f f f f f f f f f f f f 
            . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
            . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
            . f 6 6 6 6 6 6 6 6 6 6 6 f f f 
            . f 6 6 6 6 6 6 6 6 6 6 6 f 6 f 
            . f 6 6 6 6 6 6 6 6 6 6 6 f 6 f 
            . f 6 6 6 6 6 6 6 6 6 6 6 f f f 
            . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
            . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
            f f f f f f f f f f f f f f f f 
            f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
            f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.tanks)
        tiles.placeOnRandomTile(Tank, assets.tile`myTile`)
    }
}
function buildCity () {
    tiles.setTilemap(tilemap`level1`)
    for (let index = 0; index < randint(50, 65); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 15), randint(0, 15)), assets.tile`myTile3`)
    }
    for (let index = 0; index < randint(20, 40); index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 15), randint(0, 15)), assets.tile`myTile4`)
    }
    for (let index = 0; index < randint(5, 10); index++) {
        horRoadPicker = randint(0, 15)
        verRoadPicker = randint(0, 15)
        for (let index5 = 0; index5 <= 15; index5++) {
            tiles.setTileAt(tiles.getTileLocation(index5, horRoadPicker), assets.tile`myTile`)
        }
        for (let index6 = 0; index6 <= 15; index6++) {
            tiles.setTileAt(tiles.getTileLocation(verRoadPicker, index6), assets.tile`myTile1`)
        }
    }
    for (let index = 0; index < 3 + stageNumber; index++) {
        tiles.setTileAt(tiles.getTileLocation(randint(0, 15), randint(0, 15)), assets.tile`tile`)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`tile`)) {
        Building = sprites.create(img`
            . . . . . . c c c c . . . . . . 
            . . . . c c c c c c c c . . . . 
            . . c c c c c c c c c c c c . . 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            c c c c c c c c c c c c c c c c 
            . d d d d d d d d d d d d d d . 
            . d d 9 9 9 d d d d d d d d d . 
            . d d 9 9 9 d d d d d d d d d . 
            . d d 9 9 9 d d d d d d d d d . 
            . d d 9 9 9 d c c c c d d d d . 
            . d d d d d d c d d c d d d d . 
            . d d d d d d c d d c d d d d . 
            . d d d d d d c d c c d d d d . 
            . d d d d d d c d d c d d d d . 
            . d d d d d d c d d c d d d d . 
            `, SpriteKind.Buildings)
        tiles.placeOnTile(Building, value3)
        buildingsLeft += 1
    }
    for (let index = 0; index < 10; index++) {
        water = sprites.create(img`
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 
            9 9 8 8 9 9 8 8 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 
            9 9 9 8 8 9 9 9 9 8 8 9 9 8 8 9 
            9 8 8 9 9 8 8 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 
            9 9 9 9 9 9 9 9 8 8 9 9 8 8 9 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            9 9 9 8 8 9 9 9 9 9 9 9 9 9 9 9 
            9 8 8 9 9 8 8 9 9 9 9 8 8 9 9 9 
            9 9 9 9 9 9 9 9 9 8 8 9 9 8 8 9 
            9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
            `, SpriteKind.floor)
        tiles.placeOnRandomTile(water, assets.tile`myTile2`)
        water.z = -1
    }
    tiles.placeOnRandomTile(playerMonster, assets.tile`myTile2`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tanks, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.fire, 100)
    music.smallCrash.play()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (directionFacing == 1) {
        animation.runImageAnimation(
        playerMonster,
        [img`
            ......7777......
            .....7777777....
            ....7777777777..
            ....77777fff777.
            ..555777777ff777
            ...7777777777777
            ...7777777777777
            .555777777777777
            ...7777777575777
            ..77777775.5.577
            555777777.......
            ..77777775.5....
            ..77777777575...
            5557777777777...
            ..77777777777...
            ..77777777777...
            555777777777777.
            ..77777777777777
            ..7777777777...7
            555777777777..77
            ..7777777777.777
            ..7777777777....
            5557777777777...
            ..77777777777...
            ..777777777777..
            555777777777777.
            ..7777777777777.
            ..777777777.777.
            ..77777777..77..
            .77777777...77..
            77777.7777..777.
            7777..7757..775.
            `,img`
            ......7777......
            .....7777777....
            ....7777777777..
            ....77777fff777.
            ..555777777ff777
            ...7777777777777
            ...7777777777777
            .555777777777777
            ...7777777575777
            ..77777775.5.577
            555777777.......
            ..77777775.5....
            ..77777777575...
            5557777777777...
            ..77777777777...
            ..77777777777...
            555777777777777.
            ..77777777777777
            ..7777777777...7
            555777777777..77
            ..7777777777.777
            ..7777777777....
            5557777777777...
            ..77777777777...
            ..77777777777...
            5557777777777...
            ..77777777777...
            ..777777777.....
            ..7777777777....
            .77777777777....
            77777....777....
            7777.....775....
            `],
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        playerMonster,
        [img`
            ......7777......
            ....7777777.....
            ..7777777777....
            .777fff77777....
            777ff777777555..
            7777777777777...
            7777777777777...
            777777777777555.
            7775757777777...
            775.5.57777777..
            .......777777555
            ....5.57777777..
            ...57577777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            .777777777777555
            77777777777777..
            7...7777777777..
            77..777777777555
            777.7777777777..
            ....7777777777..
            ...7777777777555
            ...77777777777..
            ..777777777777..
            .777777777777555
            .7777777777777..
            .777.777777777..
            ..77..77777777..
            ..77...77777777.
            .777..7777.77777
            .577..7577..7777
            `,img`
            ......7777......
            ....7777777.....
            ..7777777777....
            .777fff77777....
            777ff777777555..
            7777777777777...
            7777777777777...
            777777777777555.
            7775757777777...
            775.5.57777777..
            .......777777555
            ....5.57777777..
            ...57577777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            .777777777777555
            77777777777777..
            7...7777777777..
            77..777777777555
            777.7777777777..
            ....7777777777..
            ...7777777777555
            ...77777777777..
            ...77777777777..
            ...7777777777555
            ...77777777777..
            .....777777777..
            ....7777777777..
            ....77777777777.
            ....777....77777
            ....577.....7777
            `],
        500,
        true
        )
    }
})
info.onLifeZero(function () {
    info.setScore(stageNumber)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Buildings, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.fire, 100)
    buildingsLeft += -1
    music.bigCrash.play()
    if (buildingsLeft == 0) {
        loadNextLevel()
    }
})
let projectile: Sprite = null
let missile: Sprite = null
let missileDirection = 0
let water: Sprite = null
let buildingsLeft = 0
let Building: Sprite = null
let verRoadPicker = 0
let horRoadPicker = 0
let Tank: Sprite = null
let CitySuffix: string[] = []
let CityPrefix: string[] = []
let ready_text_list: string[] = []
let directionFacing = 0
let stageNumber = 0
let playerSpeed = 0
let playerMonster: Sprite = null
let titleSplash: Sprite = null
titleSplash = sprites.create(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccc77777777777ccccccccccccccccccccccccccccccccccccccc777777777777ccc7777777777777777777ccccccc777777ccccccc777777cccccc
    cccccccccccccccccccccccccccccccccccccccccc77777777777777777cccccccccc777777ccccccccc77777cccc77777777777777cc7777777777777777777cc77777777777ccc77777777777777cc
    cccccccc777777cccccccc77777ccccccccccccc7777777777777777777cccccccccc777777cccccccc777777ccc777777777777777cc7777777777777777777cc77777777777ccc77777777777777cc
    ccccccc7777777ccccccc777777cccccccccccc777777777777777777777ccccccccc777777cccccccc777777ccc777777777777777cc7777777777777777777cc77777777777ccc77777777777777cc
    ccccccc7777777ccccccc777777ccccccccccc77777777777777777777777cccccccc7777777ccccccc777777ccc777777777777777cc7777777777777777777cc77777777777ccc7777777777777777
    ccccccc7777777ccccccc777777cccccccccc7777777777777777777777777ccccccc7777777ccccccc777777ccc7777777cc777777ccccccccc77777ccccccccc777777777ccccc77777cccc7777777
    ccccccc77777777cccccc7777777ccccccccc77777777777777777777777777cccccc77777777cccccc77777cccc777777cccc77777ccccccccc77777ccccccccc77777ccccccccc77777cccccc77777
    ccccccc77777777cccccc7777777cccccccc777777777ccccccccc777777777cccccc77777777cccccc77777cccc77777ccccccccccccccccccc77777ccccccccc77777ccccccccc77777cccccc77777
    cccccc777777777ccccc77777777ccccccc77777777cccccccccccc777777777ccccc77777777ccccc777777cccc77777ccccccccccccccccccc77777ccccccccc77777ccccccccc77777cccccc77777
    cccccc777777777ccccc777777777cccccc77777777ccccccccccccc77777777ccccc777777777cccc777777cccc77777ccccccccccccccccccc77777ccccccccc77777ccccccccc77777cccccccc777
    cccccc7777777777cccc777777777ccccc77777777ccccccccccccccc77777777cccc777777777cccc777777ccc777777ccccccccccccccccccc77777ccccccccc77777ccccccccc777777ccccccc777
    cccccc7777777777cccc777777777ccccc77777777cccccccccccccccc77777777ccc7777777777ccc777777ccc777777ccccccccccccccccccc77777ccccccccc77777ccccccccc777777ccccccc777
    cccccc7777777777cccc777777777ccccc7777777ccccccccccccccccc77777777ccc7777777777ccc77777cccc777777ccccccccccccccccccc77777ccccccccc77777ccccccccc777777ccccccc777
    ccccc77777777777cccc7777777777cccc777777ccccccccccccccccccc7777777ccc7777777777ccc77777cccc777777ccccccccccccccccccc77777ccccccccc77777ccccccccc777777ccccccc777
    ccccc777777777777cc77777777777cccc777777ccccccccccccccccccc7777777ccc77777777777c777777cccc777777ccccccccccccccccccc77777ccccccccc77777cccccccccc77777ccccc77777
    ccccc777777777777cc77777777777cccc77777ccccccccccccccccccccc777777ccc77777777777c777777cccc77777777777777ccccccccccc77777ccccccccc77777cccccccccc77777ccccc77777
    ccccc777777777777cc77777777777cccc77777cccccccccccccccccccccc77777ccc77777777777c777777cccc777777777777777cccccccccc77777ccccccccc77777777ccccccc77777ccccc77777
    ccccc77777c777777cc777777777777ccc777777ccccccccccccccccccccc77777ccc777777777777777777cccc7777777777777777ccccccccc77777ccccccccc77777777ccccccc77777cc77777777
    cccc777777cc777777c77777c777777ccc777777ccccccccccccccccccccc77777ccc77777c77777777777cccccc777777777777777ccccccccc77777ccccccccc77777777ccccccc777777777777777
    cccc777777cc777777777777c777777ccc777777cccccccccccccccccccc777777ccc77777c77777777777cccccc777777777777777ccccccccc77777ccccccccc77777777ccccccc777777777777ccc
    cccc777777cc777777777777c7777777cc777777cccccccccccccccccccc777777ccc77777c77777777777cccccccccccccc7777777ccccccccc77777ccccccccc77777777ccccccc777777777777ccc
    cccc777777cc777777777777cc777777cc777777ccccccccccccccccccc7777777ccc77777cc7777777777ccccccccccccccc777777ccccccccc77777ccccccccc77777cccccccccc777777777777ccc
    cccc77777cccc77777777777cc777777cc7777777cccccccccccccccccc7777777ccc77777cc7777777777cccccccccccccccc77777ccccccccc77777ccccccccc77777cccccccccc77777777777777c
    ccc777777cccc7777777777ccc777777ccc7777777cccccccccccccccc77777777ccc77777ccc777777777cccccccccccccccc77777ccccccccc77777ccccccccc77777cccccccccc777777ccc77777c
    ccc777777cccc7777777777cccc777777cc7777777ccccccccccccccc77777777cccc77777ccc777777777cccccccccccccccc77777ccccccccc77777ccccccccc77777ccccccccccc77777ccc77777c
    ccc777777cccc7777777777cccc777777cc77777777ccccccccccccc777777777cccc77777ccc77777777cccccccccccccccc777777ccccccccc77777ccccccccc77777ccccccccccc77777ccc77777c
    ccc777777ccccc777777777cccc777777ccc7777777ccccccccccc7777777777ccccc77777cccc7777777ccccccccccccccc7777777ccccccccc77777ccccccccc77777ccccccccccc77777ccc777777
    ccc77777cccccc777777777cccc7777777cc77777777ccccccccc77777777777ccccc77777cccc7777777cccccccccccccc77777777ccccccccc77777ccccccccc77777ccccccccccc77777cccccc777
    cc777777cccccc777777777ccccc777777ccc777777777ccccc777777777777cccccc77777ccccc777777cccccccccccc7777777777ccccccccc77777ccccccccc77777ccccccccccc77777cccccc777
    cc777777cccccc77777777cccccc777777ccc7777777777777777777777777ccccccc77777ccccc777777ccc777777c777777777777ccccccccc77777ccccccccc7777777777777ccc777777ccccc777
    cc777777ccccccc7777777cccccc777777cccc77777777777777777777777cccccccc77777ccccc777777ccc777777777777777777cccccccccc77777ccccccccc7777777777777ccc777777ccccc777
    cc777777ccccccc7777777ccccccc777777ccc777777777777777777777cccccccccc77777cccccc77777ccc77777777777777777ccccccccccc77777ccccccccc7777777777777ccc777777ccccccc7
    cc77777cccccccc7777777ccccccc777777cccc7777777777777777777ccccccccccc77777cccccccccccccc7777777777777777cccccccccccc77777ccccccccc7777777777777ccc777777ccccccc7
    cc77777cccccccc7777777ccccccc777777cccccc777777777777777ccccccccccccc77777cccccccccccccc77777777777777cccccccccccccc77777ccccccccc7777777777777cccc77777ccccccc7
    cc77777ccccccccc77777cccccccc777777cccccccccccccccccccccccccccccccccccccccccccccccccccccc77777777777cccccccccccccccc77777ccccccccc777777777ccccccccccccccccccccc
    cc77777ccccccccccccccccccccccc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc77777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc
    c7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777cc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777ccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc7777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccc777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc77777777777ccccc7777cccccccccccccccccccc777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc77777777777ccccc77777cccc777ccccccccccc7777ccccccc77777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc7777cccc777ccccc77777cccc777cccccccccc77777ccccccc77777777ccc777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666666666cccccccccccccccc
    ccc777ccccccccccccc77777ccc77777cccccccc777777ccccccc77777777ccc777cccccc777ccc777777ccc77777777cccccccccccccccccccccccc666666666666666666666666666ccccccccccccc
    ccc777ccccccccccccc777777cc77777ccccccc77777777cccccc777cc777ccc777cccccc777ccc777777cc7777777777cccccccc6666666666666666666666666666666666666666ff666cccccccccc
    ccc7777ccccccccccc7777777c777777ccccccc77777777cccccc777cccccccc777ccccc7777ccc777777cc7777777777cccccc6666666666666666666666666666666666666666ff66666666ccccccc
    ccc777777ccccccccc77777777777777cccccc777777777cccccc777cccccccc777ccccc7777cc7777ccccc777ccc7777cccccc6666f6666666666666666666666666666666666666666666666cccccc
    ccc77777777cccccc777777777777777ccccc77777cc777cccccc7777cccccc7777ccccc7777cc7777ccccc777cccc777cccccc666f6666666666666666666666666666666666666666666666666cccc
    cccc77777777cccc77777c77777777777cccc7777ccc777cccccc77777ccccc7777ccccc777ccc7777ccccc777cccc777cccccc666666666666666666666666666666666666666fffffff66666666ccc
    cccccc777777cccc7777cc777777c7777ccc77777777777cccccc777777cccc7777ccccc777ccc777777cc7777cc77777cccccc666666666666666666666666666666666666ffffffffff66666666ccc
    cccccccc7777ccc77777cc77777cc7777ccc77777777777ccccccc777777ccc777777777777ccc777777cc77777777777cccccc6666666666666666666666666666666666ffffffffffff666666666cc
    ccccccccc777cc77777ccc7777cccc777ccc77777777777cccccccc77777ccc777777777777ccc777777cc77777777777cccccc6666666666666666666666666666666666fffffffff666666666666cc
    cc7777c77777cc7777cccc7777cccc777ccc777ccc777777cccccccc7777ccc777777777777ccc777ccccc777777777cccccccc6666666666666666666666666666666666fffff6fff666666666666cc
    cc7777777777cc777ccccc7777cccc777ccc777ccccc7777ccccccc77777ccc777cccccc777ccc777ccccc77777777cccccccccc666666666666666666666666666666666666666fff666666666666cc
    cc7777777777cc777ccccc777ccccc7777cc777cccccc777cc7777777777cc7777cccccc777ccc777ccccc777cc7777ccccccccccc6666666666666666666666666666666666666666666666666666cc
    ccc7777777cccc777ccccc777ccccc7777cc777cccccc777cc7777777777cc7777cccccc777ccc77777cc7777cc7777cccccccccccc666666655666666666666666666666666666666666666666666cc
    cccccccccccccc777ccccccccccccc7777cc777cccccc777cc77777777cccc7777cccccc777ccc77777cc7777ccc777ccccccccccccc66665565666666566666666666666666666666666666666666cc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc777ccccccc777ccc77777cc7777ccc777ccccccccccccccc656665666665566666666666666666666666666666666666cc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666666566656566666666666666666666666666666666666cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666566566566666666666666666666666666666666666cc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666666556666566666655666666666666666666666666555c
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666566655566566666666666666666666666555c
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666655566666566666666666666666666666555c
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666666656666666666666666666666ccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666666566666666666666666666cccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666666666666666666666666cccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666666666666666666666666555ccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666666666666666666666666666555ccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666ccc66666ccccccccc666666666666666666666666666555ccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666ccc66666cccccccccc6666666666666666666666666ccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc66666ccc66666ccccccccccc66666666666666666666666cccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6666666666666666666cccccccc66666666666666666666666ccccccccc6
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666666666666666666666ccccccc66666666666666666666666cccccccc66
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666665556666655566666ccccccc6666666666666666666666555ccccc666
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc666665556666655566666cccccccc666666666666666666666555ccccc665
    `, SpriteKind.splash)
game.splash("MONSTER SMASHER", "by salieri labs")
titleSplash.destroy()
scene.setBackgroundColor(14)
playerMonster = sprites.create(img`
    ......7777......
    .....7777777....
    ....7777777777..
    ....77777fff777.
    ..555777777ff777
    ...7777777777777
    ...7777777777777
    .555777777777777
    ...7777777575777
    ..77777775.5.577
    555777777.......
    ..77777775.5....
    ..77777777575...
    5557777777777...
    ..77777777777...
    ..77777777777...
    555777777777777.
    ..77777777777777
    ..7777777777...7
    555777777777..77
    ..7777777777.777
    ..7777777777....
    5557777777777...
    ..77777777777...
    ..777777777777..
    555777777777777.
    ..7777777777777.
    ..777777777.777.
    ..77777777..77..
    .77777777...77..
    77777.7777..777.
    7777..7757..775.
    `, SpriteKind.Player)
playerSpeed = 50
stageNumber = 0
createDayCityLists()
updateMovement()
loadNextLevel()
game.onUpdate(function () {
    if (playerMonster.vx == 0 && playerMonster.vy == 0) {
        animation.stopAnimation(animation.AnimationTypes.All, playerMonster)
    }
    playerSpeed = 50
    updateMovement()
})
// Move Enemy Tanks around
game.onUpdateInterval(1000, function () {
    for (let value4 of sprites.allOfKind(SpriteKind.tanks)) {
        if (randint(0, 1) == 0) {
            if (randint(0, 1) == 0) {
                value4.setVelocity(0, 0)
                value4.setImage(img`
                    f f f f f f f f f f f f f f f f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f f f f f f f f f f f f f f f f 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f f f 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f 6 f 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f 6 f 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f f f 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
                    . f 6 6 6 6 6 6 6 6 6 6 6 f . . 
                    f f f f f f f f f f f f f f f f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f f f f f f f f f f f f f f f f 
                    `)
                value4.setVelocity(10, 0)
            } else {
                value4.setVelocity(0, 0)
                value4.setImage(img`
                    f f f f f f f f f f f f f f f f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f f f f f f f f f f f f f f f f 
                    . . f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    . . f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    f f f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    f 6 f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    f 6 f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    f f f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    . . f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    . . f 6 6 6 6 6 6 6 6 6 6 6 f . 
                    f f f f f f f f f f f f f f f f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f 6 6 f 6 6 f 6 6 f 6 6 f 6 6 f 
                    f f f f f f f f f f f f f f f f 
                    `)
                value4.setVelocity(-10, 0)
            }
        } else {
            if (randint(0, 1) == 0) {
                value4.setVelocity(0, 0)
                value4.setImage(img`
                    f f f f . . . . . . . . f f f f 
                    f 6 6 f f f f f f f f f f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f f f f f f f f f f 6 6 f 
                    f 6 6 f . . f 6 6 f . . f 6 6 f 
                    f f f f . . f f f f . . f f f f 
                    `)
                value4.setVelocity(0, 10)
            } else {
                value4.setVelocity(0, 0)
                value4.setImage(img`
                    f f f f . . f f f f . . f f f f 
                    f 6 6 f . . f 6 6 f . . f 6 6 f 
                    f 6 6 f f f f f f f f f f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f f f f 6 6 6 6 6 6 6 6 f f f f 
                    f 6 6 f 6 6 6 6 6 6 6 6 f 6 6 f 
                    f 6 6 f f f f f f f f f f 6 6 f 
                    f f f f . . . . . . . . f f f f 
                    `)
                value4.setVelocity(0, -10)
            }
        }
    }
})
// Stompy Sounds
forever(function () {
    info.setScore(buildingsLeft)
    stompySounds()
})
forever(function () {
    pause(randint(2000, 5000))
    missileDirection = randint(0, 3)
    if (missileDirection == 0) {
        missile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f 4 4 f f f f f f f f . 
            2 5 2 5 f 4 4 4 4 4 4 4 4 4 4 f 
            . 2 5 2 f 4 4 4 4 4 4 4 4 4 4 f 
            . . . . f 4 4 f f f f f f f f . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        animation.runImageAnimation(
        missile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f 4 4 f f f f f f f f . 
            2 5 2 5 f 4 4 4 4 4 4 4 4 4 4 f 
            . 2 5 2 f 4 4 4 4 4 4 4 4 4 4 f 
            . . . . f 4 4 f f f f f f f f . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f 4 4 f f f f f f f f . 
            . 2 5 2 f 4 4 4 4 4 4 4 4 4 4 f 
            2 5 2 5 f 4 4 4 4 4 4 4 4 4 4 f 
            . . . . f 4 4 f f f f f f f f . 
            . . . . f 4 f . . . . . . . . . 
            . . . . f f . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        missile.setVelocity(50, 0)
        missile.setPosition(0, randint(0, 250))
        missile.setFlag(SpriteFlag.DestroyOnWall, true)
    } else if (missileDirection == 1) {
        missile = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . f f f f f f f f 4 4 f . . . . 
            f 4 4 4 4 4 4 4 4 4 4 f 2 5 2 . 
            f 4 4 4 4 4 4 4 4 4 4 f 5 2 5 2 
            . f f f f f f f f 4 4 f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        animation.runImageAnimation(
        missile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . f f f f f f f f 4 4 f . . . . 
            f 4 4 4 4 4 4 4 4 4 4 f 2 5 2 . 
            f 4 4 4 4 4 4 4 4 4 4 f 5 2 5 2 
            . f f f f f f f f 4 4 f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . f f f f f f f f 4 4 f . . . . 
            f 4 4 4 4 4 4 4 4 4 4 f 5 2 5 2 
            f 4 4 4 4 4 4 4 4 4 4 f 2 5 2 . 
            . f f f f f f f f 4 4 f . . . . 
            . . . . . . . . . f 4 f . . . . 
            . . . . . . . . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        missile.setVelocity(-50, 0)
        missile.setPosition(256, randint(0, 250))
        missile.setFlag(SpriteFlag.DestroyOnWall, true)
    } else if (missileDirection == 2) {
        missile = sprites.create(img`
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `, SpriteKind.Projectile)
        animation.runImageAnimation(
        missile,
        [img`
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `,img`
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            `],
        100,
        true
        )
        missile.setVelocity(0, 50)
        missile.setPosition(randint(0, 250), 0)
        missile.setFlag(SpriteFlag.DestroyOnWall, true)
    } else {
        missile = sprites.create(img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            `, SpriteKind.Projectile)
        animation.runImageAnimation(
        missile,
        [img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            `,img`
            . . . . . . . f f . . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . f 4 4 4 4 f . . . . . 
            . . . . f 4 4 4 4 4 4 f . . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . 5 2 . . . . . . . 
            . . . . . . . 2 5 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            `],
        100,
        true
        )
        missile.setVelocity(0, -50)
        missile.setPosition(randint(0, 250), 256)
        missile.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
// Enemy Tanks shoot
game.onUpdateInterval(500, function () {
    for (let value4 of sprites.allOfKind(SpriteKind.tanks)) {
        if (randint(0, 1) == 0) {
            if (value4.vx == 10) {
                if (value4.y >= playerMonster.y - 37 && value4.y <= playerMonster.y + 37 && value4.x < playerMonster.x) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . f 4 f . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value4, 50, 0)
                    projectile.setFlag(SpriteFlag.AutoDestroy, true)
                }
            } else if (value4.vx == -10) {
                if (value4.y >= playerMonster.y - 37 && value4.y <= playerMonster.y + 37 && value4.x > playerMonster.x) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . f 4 f . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value4, -50, 0)
                    projectile.setFlag(SpriteFlag.AutoDestroy, true)
                }
            } else if (value4.vy == 10) {
                if (value4.x >= playerMonster.x - 21 && value4.x <= playerMonster.x + 21 && value4.y < playerMonster.y) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . f 4 f . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value4, 0, 50)
                    projectile.setFlag(SpriteFlag.AutoDestroy, true)
                }
            } else if (value4.vy == -10) {
                if (value4.x >= playerMonster.x - 21 && value4.x <= playerMonster.x + 21 && value4.y > playerMonster.y) {
                    projectile = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . f 4 f . . . . . . . 
                        . . . . . . . f . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, value4, 0, -50)
                    projectile.setFlag(SpriteFlag.AutoDestroy, true)
                }
            }
        }
    }
})
