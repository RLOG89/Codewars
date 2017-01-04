function streetFighterSelection(fighters, position, moves){
  visited = []
  position = 'Ryu'
  positions = 
  {
        'Ryu':     { 'up': 'Ryu',     'down': 'Ken',     'left': 'Vega',    'right': 'E.Honda'  },
        'E.Honda': { 'up': 'E.Honda', 'down': 'Chun Li', 'left': 'Ryu',     'right': 'Blanka'   },
        'Blanka':  { 'up': 'Blanka',  'down': 'Zangief', 'left': 'E.Honda', 'right': 'Guile'    },
        'Guile':   { 'up': 'Guile',   'down': 'Dhalsim', 'left': 'Blanka',  'right': 'Balrog'   },
        'Balrog':  { 'up': 'Balrog',  'down': 'Sagat',   'left': 'Guile',   'right': 'Vega'     },
        'Vega':    { 'up': 'Vega',    'down': 'M.Bison',    'left': 'Balrog',  'right': 'Ryu'      },
        'Ken':     { 'up': 'Ryu',     'down': 'Ken',     'left': 'M.Bison', 'right': 'Chun Li'  },
        'Chun Li': { 'up': 'E.Honda', 'down': 'Chun Li', 'left': 'Ken',     'right': 'Zangief'  },
        'Zangief': { 'up': 'Blanka',  'down': 'Zangief', 'left': 'Chun Li', 'right': 'Dhalsim'  },
        'Dhalsim': { 'up': 'Guile',   'down': 'Dhalsim', 'left': 'Zangief', 'right': 'Sagat'    },
        'Sagat':   { 'up': 'Balrog',  'down': 'Sagat',   'left': 'Dhalsim', 'right': 'M.Bison'  },
        'M.Bison': { 'up': 'Vega',    'down': 'M.Bison', 'left': 'Sagat',   'right': 'Ken'      },
    };
  for(var i = 0; i < moves.length; i++) {
    position = (positions[position][moves[i]])
    visited.push(position)
  }
  return visited;
}