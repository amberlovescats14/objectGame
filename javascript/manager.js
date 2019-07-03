let GameManager = {
  setGameStart: (classType) => {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: (classType) => {
    switch(classType){
      case 'Batman': 
      player = new Player(classType, 200, 0, 200, 100, 50);
      case 'CaptainAmerica': 
      player = new Player(classType, 100, 0, 100, 150, 200);
      case 'WonderWoman' : 
      player = new Player(classType, 80, 50, 200, 100);
      case 'SpiderMan' :
      player =  new Player(classType, 200, 50, 100, 200 )
      default: alert('ERROR')
    }
    let getInterface = document.getElementById('interface')
    getInterface.innerHTML = `<img src="../img/avatar-players/" `+ classType.toLowerCase() + `.jpeg class="img-avatar"/>
    <div><h3>` + classType + `</h3><p>Health:` + player.health + `</p><p>Mana:` + player.mana

  },
  setPreFight: () => {

  }
}