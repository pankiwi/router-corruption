Blocks.router.buildType = () => extend(Router.RouterBuild, Blocks.router, {
  updateTile() {
    let routerCounter = 0;
    let xTile = Vars.world.toTile(this.x);
    let yTile = Vars.world.toTile(this.y);

    let tiles = [Vars.world.tile(xTile, yTile + 1), Vars.world.tile(xTile, yTile - 1), Vars.world.tile(xTile + 1, yTile), Vars.world.tile(xTile - 1, yTile)];
    /*
    //Vars.world.tile(30, 93).setNet(Blocks.juntion, Team.get(0), 0)
    if(this.timer.get(0, 800)){
    tiles.forEach(tile => {
      if (tile != null) {
        
        if (tile.build != null && tile.block() != "Air" && tile.block() != Blocks.router) {
            tile.build.kill();
            tile.setNet(Blocks.router, Team.get(Math.floor(Math.random() * Team.baseTeams.length)), 0)
          //  Vars.world.notifyChanged(tile);
            Fx.spawn.at(tile.x * Vars.tilesize, tile.y * Vars.tilesize);
          
        }
        
      //  Math.random
       // Events.fire(new WorldLoadEvent());
      }
     
      
    })
    
    }
    */
    if (Mathf.chance(0.3)) {
      tiles.forEach(tile => {
        if(tile != null){
        if (tile.block() == Blocks.router && !tile.block().dead) {
          routerCounter++;
        }
        
        if (!tile.block().dead && tile.block() != Blocks.router && tile.block() != Blocks.air) {
          if(tile.block().destructible) tile.build.kill();
          tile.setNet(Blocks.router, this.team, 0);
          Fx.dooropen.at(tile.x * Vars.tilesize, tile.y * Vars.tilesize);
        }else if(Mathf.chance(0.1)){
          tile.setNet(Blocks.router, this.team, 0);
          Fx.dooropen.at(tile.x * Vars.tilesize, tile.y * Vars.tilesize);
        }
        
        }
      })
    }
  }
})
