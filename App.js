import './App.css';
import React from "react";
import reactDom from 'react-dom';


class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      showMenu: false,
      showMenu2: false,
      showMenu3: false,
      showMenu4: false,
      showMenu5: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.showMenu2 = this.showMenu2.bind(this);

       this.showMenu3 = this.showMenu3.bind(this);

    this.showMenu4 = this.showMenu4.bind(this);

    this.showMenu5 = this.showMenu5.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ 
      showMenu: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }


  showMenu2(event) {
    event.preventDefault();

     this.setState({ 
      showMenu2: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  

  }

  
  showMenu3(event) {
    event.preventDefault();
    this.setState({ 
      showMenu3: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    }); 
  }


  showMenu4(event) {
    event.preventDefault();

    this.setState({ 
      showMenu4: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }


  showMenu5(event) {
    event.preventDefault();

    this.setState({ 
      showMenu5: true
      },() => {document.addEventListener('mouseout', this.closeMenu);
    });  
  }
    


closeMenu(nativeEvent) {


  if(this.submenuBody && this.submenuBody.contains(nativeEvent.target)) return
  else if(this.submenuBody1 && this.submenuBody1.contains(nativeEvent.target)) return
  else if(this.submenuBody2 && this.submenuBody2.contains(nativeEvent.target)) return
  else if(this.submenuBody3 && this.submenuBody3.contains(nativeEvent.target)) return
  else if(this.submenuBody4 && this.submenuBody4.contains(nativeEvent.target)) return
  else if(this.submenuBody5 && this.submenuBody5.contains(nativeEvent.target)) return
  else if(this.submenuBody6 && this.submenuBody6.contains(nativeEvent.target)) return
  else if(this.submenuBody7 && this.submenuBody7.contains(nativeEvent.target)) return
  else if(this.submenuBody8 && this.submenuBody8.contains(nativeEvent.target)) return
  else if(this.submenuBody9 && this.submenuBody9.contains(nativeEvent.target)) return
  else if(this.submenuBody10 && this.submenuBody10.contains(nativeEvent.target)) return


else
  this.setState({
    showMenu: false,
    showMenu2: false,
    showMenu3: false,
    showMenu4: false,
    showMenu5: false
   }, () => {
      document.removeEventListener('mouseout', this.closeMenu);
    
  });
}


























  

  
  render() {

  return <div>
    
    <div className="menu">
            <div className="title">
        coinbase </div>
              <div className="nav">
              <a href=""><div className="list">Prices</div></a>
              <a href=""><div className="list1" ref={ref => this.submenuBody = ref}
                  onMouseOver={this.showMenu}>Learn</div></a>
                  <a href=""><div className="list2" ref={ref => this.submenuBody2 = ref} 
                  onMouseOver ={this.showMenu2}>Individual</div></a>
                  <a href=""><div className="list3"ref={ref => this.submenuBody3 = ref}
                  onMouseOver ={this.showMenu3}>Businesses</div></a>
                  <a href=""><div className="list4"ref={ref => this.submenuBody4 = ref}
                  onMouseOver ={this.showMenu4}>Developers</div></a>
                  <a href=""><div className="list5"ref={ref => this.submenuBody5 = ref}
                  onMouseOver ={this.showMenu5}>Company</div></a>
  
              </div>

                <div className="signAndSearch">
                  <div className="signIn">Sign in
                  </div>
                      <button className="search">Get Started
                      </button>
                </div>

                </div>




            <div className="wrapper">
            <div className="JumpStart">
            <a href=""><div class="bitcoinImg"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAEDCAMAAABQ/CumAAAA81BMVEX///8uGvf///3//v////suGvUuGvkuGfouG/P///kAAOv///gAAO4AAOkuGfwAAOcdAPcZAPsTAPT9+/8lDvjn5fZOROLDvuvu7fklCvmfm+dYTOaUjeX3+fpCM+QcAOKwq+QzIefHxe3g3/Xd3fV7cuXMye6ak+fS0fHz9PvPyebg2viGgO1lW+ArFOheUuJ6cOunpO2+t+5HO+KsqeqNhuc7K+d/deJFNuAvGeZiV99tZOY6Kd25t+evqudZTOGHfd+gmuFtY95PQe6Si+9DM+yGfu9aT+0uGdyUkdo0INtrYe6Nhu7Oy/hZUNyOheBuZ9Yp8K+yAAAVtklEQVR4nO1dC1fbOLCWZUtyHMexFedhSAkhkMdCobxLW6DbffW23eX+/19zZ+SENrYTLDvQnnv8sQ27XZA10rw1GhNSoUKFChUqVKhQoUKFChUqVKhQocJPAFUfP3zO/5o+/k/1SZO/98sAZ1qz4NOCj2XA/7Msk1g1/P7rUkBwrubiP2qz9uF0+ttvv033R7P50gNxxDQJtX7iJNdDzYyOultHrzvHruu4riuldBGNnZM3k7t9pEVtyq+K1vT04C/H9QM/CgXn3OD4oT49L4x8320cv+53ez97nj8AuILiP/jVGvc7TdePBE56FTgXoS+d4fVZb85YwHk/d0tozQIQ0rt7DdMP10x+iRARycb5ZAoiUaPWz5ULWjOBrXsX204QMsHtfCQwZgCLRb57c3lIyE/WT6BgWrevHSk4M+APy0cCcprHgBQjcK+2ej/FSAAHAwOgXun1b2SI0srysVCaFOm+3yOx5XhRjkIZhmcevnHkOuHNAeax0L26AJv3worWhE0g4203El6R5f+RBIBhB4Ot1svSgNs+7bh5FdB6GrghPMMIBpPWy03fMutk9E4iATynAD8BG8SC+YMLUqu9iOUGRd67dqKSDJQmg4NMdAlVhvK5KSAXDZ/bYrMUcKCBC+d1m9af31rvn7tgmjx7sySAUNhARdT4nTyjuYaRa4T0nQj06KbZCAacWxf/7Qg03rNQgR5djbR35EYEeDUpduhukTp5Fq+DwtKcNsNnJQAgbOZ3euRZ9BKlr15LbzNadC0Nhhc2uxufPbARJfs3vi02LsVpgLkW7sOGPQ5wqS1y24hyOtPlwbn77tVmiYCx+tI2NmwL1pHA5VUbbNDGaADX+r3PhfFSm6D88Giwj/7wJqZvUZO07gObiY0bg5UEqE+v0SUq/1SWDIxsZh+il5r9EiWNWzTVpZNOQEJvGIpN+0S54DkXBJmgNDfNbkTuyH6z4MI9JXXLfHqOK6GyiL1hBIG9V3AS5UgA5Qr7UMZ1rZEanV2FRcUYdg6+WCktwN3bUmkB06KtHaOoU6FSkfG3EhDlnI2aaZ2EomhowMCQhPDLJaWIu/tlaCCffOAHr+gkwq8HDVeGohQR3BgUTCOrTNeWLMXI/piQ0cWngetHfCHaTH9Xwi9gGgoIBEbhXVnGM7V5c0ZQIdLRxZvhnB25YMfaI8l3oFf0SQA5aA8gyi/OBFycw2bW4gBsx1OWBSgo4iz6kyK7YNJXH8JSip3Ly/iQDVz1nqsYiLMr1w+1aeCG3NOnALjvwC8+/ZiEPWUb8fjtzOECdVOHjO7e38ggwnnlXx7GQaR1szOUnpUO9BszxUOY3DoKQMMyw+8rt3O0+37gauwwUB/d43GM3jb0mgV9ikeE53P/DMRqB/dA2MEYGUvN5DTQ0RTMcLcI1XKWKLkPyzqn/p/EnA/Wc2DJGWegolQEUrPoxzC/2Yaf9HhjVNMgAJz0C1eHVzmEdErj/2BGUBTULoCFufUxfSbEH9/rAoZabgueIr1FxZAzeAAB7DW1BIFFDLSvWHLpuDMji3U7Qs0AonD5OIG2q3kwxG0JrFTPyUu0Rt7ppbzC66um9I2loAJEYZ7QssAqIAkiVlEKqCz0VomLZtsyrXzcZNI9R2t4sQP7dnY9dHz/uyn0L0msBU2rFw/nDWaPJHyMdP1fbkevgZNybAM1QRJuNCQZpDT4GK93++zjjSN9bhsQIsk9y1RLRsmtsjCcnS9EgZKh9gkXiLTs0jyOBuZufvdZfo2HQ59Zj3LaOzsaSB/WWM7me05jUUBrbc1rekDWNAlQEB9ojnwxJj1mA08j4QI83ezNNQU11T637w6G7ltqLujaUYEf9/fiXYGfPZNFSDD80xy+Ug3499LXiVOAp/9CrrcWe2iqlertxwe7GH031YoIsAqxx1Gb74s2wPfNoVSp1W5wbutwavDRovMYXR1II7PXiNpzNeUzKbgQsYrCH7JMclXMbAo5wXHXizSluivEDHm2dkjr7L9jR4aGfHgsbevpabzvz4JteNK6WeAXaw7LmusDQ3hk6/DuzY2z91icdxsUogBICCbqoGDt80AS9FZIiL/WrwoyGerC0SzOVAObHRVMcAL7NVvmmoS3Er5ZQzdrEh6paVlKsWYMPhdqjBusua27wuCtEC8x/3QtJ4H9Jr8HmjbH5o2/jm7bsL8WLk8OvQ28Gnp2wahc3KwtEQX66I2nYdYQnGORV/Pzm+4rGKD+dCodDM9dp+kXLUABE71aI6mkhasf8TPhce5FvnNJrVaOgxnUuqPLgV8spoL4bQ0jUbN2H+omQSEQsG2sP7C5fw6C+7QfhmcG1Hp18UWiddB09ziT7dUk4FGCWyZg5n5f58CYXtxIIFz3ieACrxmzNinmuyzgDYlGjA6apS8LnMUfrx3yqlzML8DhS426bsms9rmvF/pw8IHHq0ck+5qWOUXCoKXDSBTr0C81eZcZ0cEaEvq6RiGB8D5xPmnR28H1xUhNt0ZTZ7AUo9JdR2gJhMeOW6tEbh7jloC/lRia1o6CyHUHny7aMN96RswFNHdhH/J7rmDX/T1rRe2Y1XbLnSoZckqWlTYlHyIGYWjguzuTEUlrdFU/tSs1rCm37ehopRNwWtDaPI4+mCXcSMzmsPhswfMbnduMTcCC5yON5CcsMv9CMnZBUfUuLFGrAwwdnqQ84b2Ax0kyvAkQyquuqtH+XrsWV93TG1UWlvNJnLuj7JoASpwybMRtiKmspHG+DH6cGPfkO4hZaonCNWue48gNcFeznYCxn7dwPAvwq+4U4v/l2e2Ey2xuB6o6ZPnBdRMNkoYchl+zxBn+ZuKzMoWPNh+0SELOeoNlH4h5whuMkofhNZNuaW2DOM6qzADm+i9kpc7WwIf8UV8ju3aTthd8ovDzq8RWwQ+OHC33Uu6ndwFGMQelsvE28yfJIelDlq1MWQ/EMfjr+R8W7KYGwNTGqJSXasRW4Qcgu+yIdEkr924ylvAPoSOH4d+ZIe5tOS+VeYNXyySAVWiwdPkDt912+vmfQh1G8t5mMtKfJY8HxcnysKD8u5JlMKdIbJfCx0jDyRBKcyRh6Z4pJGGnDocpecjMF3F3mlYnB1rZeua2M/iIfCjr400TLh7JdhvBuGaEjtuRRiG4Lfx0fQzFBFIpCrxmwmDSVSl4FOcUJw91CjAZD37PIGFUTpoNcJCS5qYrU4fLWOHvP6TMAp01bJ5fFnhW2GOBe1GOBP/SSoY7D5GRuOwG0/SMRoKP0VmYujrxJ+Ph14xd2C2Yql1AThO5TkqHgbATAZlte+5dQuzNWp1OpKchC4zzYYoEQkvqVN40E5frLGv300AGy0fkQjh49ppipL9sQ6cIk/NBmgTr73LltOF9MlawsMB0/+79YBAEURgKLsIoaHT2sfR0WZrr9NDVqyPlPH0iYJH3hSshMdzB85esakx1EDq+OPr6x3B49c/BRTvDS6ZoFbSeB5Fgc5TO73RKWTYB5irr5rJK2FPymLfPvN5sjbQVOpej5FEALZW9wAqRFsmsTFYRokUXRxBZqQeTdnQvKnIjmNLEUJQWPMGLR8RYISucxb9RheMmzF91ZbB+POyb/8IkyHKl1j8w6JJE9EfJlxK7wJOxQi4oiuDrTmpXhAMJt8ksBiWfy7hI9po852qYypxPpG3oPpuzjZPgNQvckzXrWMpwIiFi1y7IYMFZUqjKkcCi7QKXDGALRkeugKBI28FUJCQ8MiShRBbJnyS1A+m/P5221KFUDeJyK+t61P/suH7cBqAACbfJKoBy4mzI8ZKXiueqO4GUze3+GKNRWjczKolo78Dlxa4IKY2Uyqt+KKFURaOV2FVr1oC58dB3GycX6Jlm5X0IHd9ERpHyYdiFvVTQQXdKkBBuJ8ejXcm5rZhEBO75aS/juAev6bw68Ytk02EXpmk71CnhIwWTxAwtcjl3fNVFjNBvfpqqk3my/IOwN9c+M2zdLCJncpRaEfI1Khx4cndMl2QL1ud8yeVizHdODtFQJ1bONGsH0tC97QSL7aRIqJG/S5DQmC3vKrVmy1ly0Jt26B60aIrhQCY7kaFpGJghBrMkCaXSSGEndWSx5y9NiguGJduDw6RIwO5Z7YH2LXYuMkIeeqFZxPM4GohWukioHyyPFh/1eM1xchewrn5L6toG27tKU0C6BSvlOUTD/1rJYrMVyoE5h+lTMvrK0Vas4UmKBIscFk3CsLjob0kWZk62xeJi2MpIhh5pyiHjbjoJQ+ms8LE5iEJSSvdWtbsR/iRdslwbu7q7IC9So8A2fNbIpmFDJLwrJtAEB336Q/5F6abLlWUJIs3EFtXNJIJxzriwR8l2/uBZGHYUCZsz2wZV4y7FCoqczsqzU95MJXSBZl27wGQ6LQzM/C2/VgUlf/LtypUBuIZMXTtbmtHqVQXV6v6bQcK2buCZkZynxNrNL8+24U4Jbe8efHGlPB4tKxnLpHty5SYYmSR80kvCCLxvlh6GHrp5Qw/Ow7fzxljt8W9k+awZW7D1/VWcIYxG2rmh5LVmHin8Ox1+gHVtNey81yKYf7e6VBRIW52TssUgFTfAtum6yf5umgSsDNrOOBjLBh+sKTuiZLb64JGHb7J+Q7cAWo4ydgHQD/JGUP5kDQkWWIWVv2m7h/XUb9R0i6y9rNo21OZjmafoH293NXurK3apSb/Jx4u1j9/wZJwxEVxnEG+NNZ2b8OuKmiqIFfPcZeM8erMuX2HRs/cDGQjuqfkz7ASmPgU35H8ZRaaw/5pesjxd1Y7rJFdqk3vOtL6aBopOKz08/dpsSB+va3OIBpQtZ0HjUl3ASMCsnWumpN3RKi7Y8nPUYABLdLAodyUJpFZTGWK6f/fxjwG2JkVg/87LNrEyiKe9BtcKPMWQkOzn01GOAy8ImGSXzG+Bp4IwEtsFEhsNUPit9r+3W/2Hh/5pd6Sa9malMmDpdCgwoqPV5YXDp6/528J2xjOqyuStLBL0oErtd3TaNABnym5tRUmVlee8DS2HbHT6e/GdL9WsrwQJOJep1MpgCLBKK5euPn26GEZdzYQw2Hc6f45VqFOuixHo4HehTgs4boNCXPnIPLlhhoWAoDAZC33ZOIfdKDF/ZF5r6jKtC/rc3VvZR9as04k/X+c1Izw+DbjS891mpz/G6+Uopfo8BcKtqVHF2rJzStsu0+ynBfuKZOwXZCaLaBfrB5drVgq85vtItxWSB9ED2pqCNPyre/2Ju6M19wtAu5xhDbjekPAFtmZ+JEs0mxm1m0LzUCCdgl4CKKtj7dYX8PPRwZwEi7Y+9Mct8uTNKooWvEZGeiWNeB4kb59api1Z4KhEXsRTBg059kE07remrfU3k0Hu6jXSdfSYlts2az7VPAwid/0cPXfaNE68W6jTGA8D+b/rV4q2IDJ6o12TyXiwZT3Rio5inZ8ulCjgsGad/BMic9ty96k7Pb1+09etr7Y5H7x66p4qrbU1e3hwWPQ3i5WxWipLzY15+R9eiry4vN3/XrYSL2D79sTxC/QZ8tzLxTXL1TDJtWb8wY3grr5YmLGrFmBRTQueN+kEIB1fOgd/Tna7e3vd3cm3d5/dICxwVAthn5Oj3ROYN73sILho7gj1sdqFSZzi96/j3Ya4YYYtNYQXgj8iJf6RfoSsVqAzLreDyxwOGTz5o+6d7eGiogOzmuqav1yczVtkHACrQdTs4fbAvwrl0IPAFDgw54P0pbP0JsBceg2mUQKuqhXnfGS14rJOVFFxTKTiYjv2btH5wu7mXCVldYsWsIBSTvK2ttnyNQJBZsi7x98cx0l5fjMPzynWGulNdRUFzObiOG9rT/S5dTa5+T3FOImT8tH1ggTaKtTxIosGz3DPajnbPFlWV8N7xFr+R2yHij/k7tzxpta4ZAXvI2wbTyXzepOUYgl6TtvPwgNrfh0frILH8B5Co704PqSTkuWvC3AmnNHTNuGRBOzJlLdulEVHPRRnPDGcOp4Nni5Y69qiu9N2ucZ/30ngwYOGPw/PP5V541lhhI3hwW4bN3nie9ifOTp4bO1hlu7XNQcTX3Qaz+HV8dyKxIY4WkRB8+Zgt/cPhj8QlOxiVxU1km62dDXcqc4l3rhPVc42BrjuwKhChEETK1/AjIFVIFYs0JOgZCdPBJZo+A8rEniryaBn+oGDmiyYLnBc6/Ma2/tNvKgBezycW9q99C3rTTF1yIQdfn6zO1KXmVuDIt5cigSGOk4/XUVfXRWzq/h2kVC6QEabTDeiUm3un5G8zdq+E1A3C1RSI9Au4Gu1RCTl1R+5z77WgcuPeD9LUxYUbl3tGtgEOeVbW0OgZkfbqZutuVG2F8AGgDUGx7PCuWdKX5e84FMeWCvUzrhxnxM1i27/XBrwbLIxLvGePUrrvR2NdpUbJwDMJJO3BWqpv5MArsZsGL7Amy9WkGAz5p6WOkkya9iP6Xjjb0LKT4KHV4T0+qgmdkF1R2iXu8pdAhDTqktOpRgJT2dp+/jZX2WTNX0QBHdCSUaltC4ZVqvWuwk3/0KnJ4DhvnO6mRd54NdsR744M7Gw0bXoJl71ZOFbaGnrv5e2D8xojvEFGJvYBhIXVl9L8JdUB+HnBwevwh+2NVs6PwWIph1D+aAvQALInX/f2vSrtoCZxk6o216tKJj7QDYiBt/nH/PSrBNo35UohNDp4kncRt/vtPh4cCM7flnw8wDDJebJ896zvdbTItMb32DP94IbrIcTDvoUz/XyP9Su1070XCZCpdPlzojkTjvqQ/VLH189XyjHQ3diYY3Is72CUV0TpGTihpgX0WxXvh7Y8N0Qzn37JV4jDkvUfu+GYhMJohjq3hgzmBx2X+btwqoia3wuw01KNTe8YHBKLXOj9ngVBVhvDtzU/SA3F85xQw76M4xtiuSKtEkgeEsZ+3V23+LbqVn595IyEQAB8cvlnlsMksSM3zUDfINTQS3LMdFme6G8OX2xFyMvEaAyzaOjgS+8olLBj5nwmyfd53nx6NNAX96sWbPd7WZQsOG0Ebg3/ZHqTvISMpBGTbXWhq1o//626Yc/WglurPLK+eN34buD6zHuJvqQP2cbfkT79L7pYt9pmFrcDXLpFrO6C2AzdQGAY8VxJJ2bj3vli403ByyHn+1923F8P/RUy2fGve8uLWPYBNrDK9yCRYEvm59OsdjHrL+IJcsF1WUELOvst633w4YrfT/2BeOKI+V/ciFC35eNRufjXXvRxuMX2oW4W40Zz6m1fzY5ePfBcV1XulJK9d1xjjvvv52O2yp+IrF5/IUIWGC5b36rvT/9LcbhaKkSav5qiZeenj4WTn9ci/HrcL0GsKkzwf4Xpn4F7i+C+OQ5fjWJ+QJRwDOCrni1RIUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqFChQoUKFSpUqPD/Ef8HVeNpuT9I3AgAAAAASUVORK5CYII=" 
            className="bitlink"/></div><div class="bitcoinTxt">Jump start your portfolio --> </div></a>
            <div className="Jump"><h1>Jump start your crypto portfolio </h1></div>
            <div className="JumpComm">Coinbase is the easiest 
            place to buy and sell cryptocurrency. Sign up and get 
            started today.</div>
            <div >
            <form action="" method="">
            <input type="email" name="email" placeholder="Email address" 
            className="Email"
            />
            <input type="submit" value="Get started" name="submit" className="getStarted"
            />
            </form>
            </div >
            <div className="last">
            <a href="" className="last">*Terms apply</a></div>
            </div>

            <div className="circle"></div>
            <div className="mobile"><img className="mobileImg" src="https://play-lh.googleusercontent.com/2k2zVCdzp88js2i-BlNKNJpuHTqO0k2G67BmW_8R9caBO33evmywx093W1PGnY10zKF2"/></div>

            <table>
              <tr className="head">
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Chart</th>
                <th>Trade</th>
              </tr>
              <tr>
                <td className="Numbers">1</td>
                <td><img className="bit" src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"/><span className="coin">Bitcoin </span><span className="b">BTC</span></td>
                <td className="price">GHS 324,401.28</td>
                <td className="change">+1.27%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>              
              <tr>
                <td className="Numbers">2</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png"/> <span className="coin">Ethereum</span><span className="b">ETH</span></td>
                <td className="price">GHS 24,637.82</td>
                <td className="change">+8.07%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">3</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/93a4303d1b0410b79bb1feac01020e4e7bdf8e6ece68282d0af2c7d0b481c5f5c44c0cec1d7071ae8f84674dbd139e290d50a038a6a4c1bbc856ec0871b5f3e2/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"/> <span className="coin">Bitcoin cash</span><span className="b">BTH</span></td>
                <td className="price">GHS 8,471.21</td>
                <td className="change">+6.79%</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">4</td>
                <td><img className="bit"  src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png"/><span className="coin">Litecoin </span><span className="b">LTC</span></td>
                <td className="price">GHS 2,121.98</td>
                <td className="change">+3.50%/</td>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3iY4ne7lULSq1xpbYlufYGqDZPY134kZUDQ&usqp=CAU"/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>        
            </table>

        
              <div>
                <div className="Earn">
              <div >Earn up to $25 worth of crypto
              <p className="discover">Discover how specific cryptocurrencies work — 
                and get a bit of each crypto to try out for yourself.</p></div>
              <div>
                <button className="startButton">Start earning</button>
                </div>
                </div>

              </div>

              <div className="Ampleforth">

              <div className="Ampdiv"><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/skale/asset-logo.svg"/></div><div className="Compound"><h2>SKALE SKL</h2></div>
                <div className="forth"><h3></h3></div><div class="E">Earn $3 SKALE</div></div>


            
              <div className="Ampdiv"><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/ampleforth-governance-token/asset-logo.svg"/></div><div className="Amp"><h2>Ampleforth</h2>
                <h2>Governance Token</h2></div>   <div className="forth"><h3>FORTH</h3></div>
                <div class="E">Earn $3 FORTH</div></div>
             
                <div className="Ampdiv"><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/the-graph/asset-logo.svg"/></div><div className="Graph"><h2>The Graph GRT</h2></div>
                <div className="forth"><h3></h3></div> <div class="E">Earn $3 GRT</div></div>

                <div className="Ampdiv"><div className="Ampdiv"><div class="AmpImg"><img src="https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg"/></div><div className="Stellar"><h2>Stellar Lumens LXM</h2></div>            
                <div className="forth"><h3></h3></div><div class="E">Earn $10 XLM</div></div>

                </div>
                <div className="View"><a href="">View more{" >"}</a></div>
            

            
            
            </div>




          <div className="Create">Create your cryptocurrency portfolio today</div>
          <div className="Coinbase">Coinbase has a variety of features that
             make it the best place to start trading</div>










            <div className="DocImage">

              <div >
                <div className="ManageImg"><img src="data:image/png;base64,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" /></div>
                <div className="Manage">Manage your portfolio
                <p className="Buy">Buy and sell popular digital currencies,
                   keep track of them in the one place.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/png;base64,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"/></div>
                <div className="Manage">Recurring buys
                <p className="Buy">Invest in cryptocurrency slowly over
                   time by scheduling buys daily, weekly, or monthly.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/jpeg;base64,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" /></div>
                <div className="Manage">Vault protection
                <p className="Buy">For added security, store your
                   funds in a vault with time delayed withdrawals.</p>
                </div>
    
              </div>

              <div>
                <div className="ManageImg"><img src="data:image/png;base64,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" /></div>
                <div className="Manage">Mobile apps
                  <p className="Buy">Stay on top of the markets
                     with the Coinbase app for Android or iOS.</p>
                </div>
              </div>
              
            </div>

           <img src="https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp" className="phoneImg" />

          

      <div className="customHr"></div>
           

           <div className="Create">The most trusted cryptocurrency platform</div>
             <div className="Coinbase">
             Here are a few reasons why you should choose Coinbase</div>






 



      <div className="Ad">
           <div className="Advert">
             <img src="data:image/jpeg;base64,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" className="CrytpImg"/>
             <p className="source">Secure storage</p>
             <p className="sourcecomm">We store the vast majority of the 
             digital assets in secure offline storage.</p>
             <p className="blue">Learn how Coinbase keeps your
              funds safe and secure </p>
           </div>



           <div className="Advert">
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABmFBMVEVRd4T////+/vbFwrvfkT/W08yjoJsSFBMAAADTWjuAfHv///n///v///1MdIFGcH7//+xAbHs6WmfCv7h7lqDfjzgLDg3Kxb7x9PXf5eddgIxWe4ja19D++ea7yM1mhpL29u7ejDKOpa3I0tacr7awv8TNzcjp6ODN1tvi6OqitLvSVTSRp69tjJfdiSrwz66pqabEwbRDeYiRjoqVmZf67+Do7ejSTyzdsaPZvaHW0MXh4dtJSkhwcG6Cgn9fX14aHBo+PjwvMS/q5tWipZqZpKW6gnyDlpuOa2h/bm/JXUFrcni/YEmlZlqtZFWbaGPZcFX73dDgk4Hdg2zfj3rYbFGIkZPrv5D14MjlqGXtw7rosnvhmk/nqJLZpZbqtpndflfiycDdroHcuZY1VmTlp2vquoqWZDEAAA5fQiM8KhcZMDvDg0QlJibfz7tlZmMdEQCscDCDbVfIm26zGACzOjKzVk+yJRaWGxFwDghnNTFvTEbDoJuiAACFHhZ2LyrNtbCqQTiEKiOGAAB7TUdyAADIpJ5+T0k7i9DyAAAWtElEQVR4nNWd6WPbxpXAAVCkKeEiQlLiAZIQKYq6KJOhDofUYYmy3cSJ124TH7HiXR9K0m5kb3YV0U3ixo3b3X97ZwAQGNzAABDZ96GJKxPhT+/Nu+ZhhiBjl0JxpdpcqufatVK5TBBEuVyqtXP1pWZ1pViI/z9PxPjswmpjrd4mBIHneQ4IoQv8I/h/BYFo19caq3GCxkVYrG60yzIY4S4yarm9US3G9E3iIFxt5ggI58Fm5OR5ItdcjeHbRE1YaNQJgQ8Ch2DyArHRiNpiIyUsVHMcJp1GKXC5aqSQERKGxxurEkBG97WiIizW+UjwxpB8PSrPEwlhoVkTosNTIYVaMxJrjYBwdYOIUH0II08sReBcQxMWc7HgjSFzoY01JOFKO3LzNDEK7ZUJEq7kYuZTGMPpMQRhrPZpYAxlq9iEhfoV8SmMG9h+FZewCfLIqxSeb14p4Urtavlkxhqey8EhvFID1YXj6zimikHYmAgfFJ5vXAFhoS5MiA+KEFyNQQkb5UkpUBG+HHQ1BiRcmqQCFRGWYiRcnYALtQpfC5SPByFsBGq9xCccF8ThBCBcmwYFKsKvxUGYmx5AgJiLnLBQmg4LHQtX8hs2fBIWiekCBIhln/WGP8LJpTHOwnH+IqMvwurko6CdCL56jn4Im9MJCBD9VFQ+CKcoSpjFT9TwJlyaXkCgRW9ET8IpyETdxBvRi3CKTVQRT0P1IGxOOyBA9HA37oRTGiaM4hE0XAkb/wqAANE19LsRFqffRBXh3BI4F8LVqctFnYQru6ThLoRTVk24CVfCIZyqetBLOOd60ZFwgoHw4z8E/4xzWHQinJwb/fjTz2Y/Dv4xx2axA+HqpNbgx3c/X1//HIOQ4Bw6cA6EtckQcsQX67Oz6/ewCGtBCCdUTwADBYCz6/9mJpSH3zhFHD/N27eKbQknswg54h7kA4SfKn9W5hd5jijXckvNZqeTSqW2HjoHMd42t7EjLJSvjAoRVYFAdu/ygsCVa+07G2vV5cGORJOUCPEU2XJktA38doT1iewOfqHyAR2uVRuAS6IYhobCSImUQZy8BF/3R3iFNqraoSAQpc91wPsQi9KESabM4oQo2IQMK2Ehdi8zXl/lUi1Xl/XFPJjVAGfX/8joeBQtdSyAqVTJ4dG81U6thHHZqMwlCDxRktcXtEOKVuyQvbE7q8vuM4SQbtnwgbXoRGi1UwvhSsQqVOe5BaKW21hrLsvrSwXTzPAbFHB294FuovTAFjCVajstRYs/tRBGEutVOwSOvqTaIUWrQpmFpv5kAJxd39b+kkGDvZ4PJVrjvpkwTGNGCWCyHapcEs2yjC0Xss7umwDv6z/b0fHm5uZQQueVaG7bmAix3QzHC1wNvkQBuACY6uedwTSI7fvrs0bCL1ntp4qT2YJ4QAxmesfpm5idjYkQz80AvFwTOg6a8YWFavArE+Ds7o2xo2EWxtqT5cBA+NDpm/IbboRYnRmOL1UlJhjZGJCeNQPqjgbaaO9gTpMtozd1Tt5WXQhzGCrkaw0sOqikR9tmPiDaTzu9OVRSPglN9b6BECdSCGsUJh/FXt+8/kezDtf/RCoapJIGPqOfcSMk+KIjYXAVckSR8eBw1uDjzfyTr3dNhMoypKmWuDXnokI3QqMSUcKVwAkp15ZwFQi86OLMzOYDCyFYhoAvmVx2VaGzpyFMLWKU0ClPiAWQok7zMzOL1z8zWylQIeBLillXFabuuHxZrm1PWAyqQq4UApD5FqhwJv8ULsR1JO3+kpTEJCRMGQAPzIROEV8WoWhLGHwV7oQAfLw5A+X0m3XgXJ5piLtfQwVCwgNXFTplbervPmdHGDgW8g1sJ0NRUl4GnMn/O4Br3dAJ+0lV3FVY8/huqzaEGwFVyNVDAJJPF1XCp1/t3pC+0oz0/hhwwV2FHl+WW7ISFoLxAVuX8AHpxyrgzMyT+59Renm4/kxUjTTrqkLvTlLBQhi0qODXQqhQ9qOq/MdzCYkVz5N2hMEB9RJDIwy608SFUCFzXVPhTP4F82wXeNP13d312a++TNoRmlT40EcvUK8Tx4RBoz23EUaFM7rkh63d2ftffnPjxvt+PynaEhr5/OlCCxhjwqBlE1/EjxTsI1SF7IvTJ6dA4J8WPxkTJhPmdGbr4cOH7VLZ77YtVzcSBq58SyGMlNpEdNgaIrinmg7HSdv+3bt3a7US4dHRt9OBkbAakJDL4RspqsLFl+xT3ekgKkwmP4LyCghm+3a83Ubg5TN8E99IK4gGFyVEhTOnCKD40auPFMED1PIahTDwdiG/EqKmyDup8CVKyKmA+K2xAkIY1EgJHjcllSSa/VaHkobImjzto4R3X4VSoTZJRGAZKcHt4AEy158AJW5qSiPPdNr8SxEhHDxUCPHbt6qZyoSF4LU9pitlzzaf0uSTMVYLVeEMqsLkYIkjgrpPsxQ0wkZgW8ckhGtw8VtSzUqBCpFVmH+BqjAp3noV9iVjZSeKwAn32FYqp2ubjxhNhTrgzKJBhUmx8yqUjcIvuaERBn8OpqehZZ1tXn+Ul5VGvnBUIUjbXoVxM7KUx4SB2xfY0UKte/OPZKW1pBlHFYIC8VVYQEJYVQkxdmP4BlaL+zHiWEBG+hJJ2J6aAJPLoQEJvqoSYnS68XIa5hG67obSKcL72koYeidTjheQEOOz/BJOXkqiSGf0a0SFZ2bAZNK1m+ZTFEKc7RjMzBsx0sXXLFLoL1pUmGy5dUR9CuzvExgpGyRsYxAaluGpMecWzYAiG7Q1ZkdYlQlx9gy5GoYG6eto2YSGCkPZpABSTATznzAiEhjNfCg4FTCawRhDhVWFEkXj2JaZsA0JMWe8AiQ1cKyJZVmK0R0NCBWoQi0qlGiKDr5RZJVyARDiTeR7JzWQi2FJkmoNxOXO1tz+4fF3GtPmaxqpKk7NgC3wcDqKVwX4VUCIZwzCwJ4QYkEuUhosJzpb+4d7xzfTqsxf01Ro8DOGyheK8uydCOZe+AYgXMJ6kDWpYRh54285C7j2ztMa1vz8NVXmv/9RM0vypbMKReWBUgQjkvwaIMTZu7dLajpzh0fzOtc1i8z/+eZfxlAtWnczebMKx04sgpDP1QEhlislOFNSwx44cEE0Ffy7H//zB4XpqSE0Wr2MYhQRjGcBZ0rg5Gzwo3WjDun0vIlqXlfo0ZteqrNcfLr5WKl9F18jwdC8ClvjB7N41mWUMkkU8HwylzPaKHtzXuFSqa6dH++96XWyywMJuB0WuB+aPcufUkoDY0cPhnmTCnUPxkSQ1BBCgcAoDmVCU1JDZ2VtAaz9XiexLLYk4FAhF6LqJ/nFRzAK5l8w46Q7v3hqjIUi8sgoXmoRVongPRpVTEkN00qIrZZEsaTjrB4I+IuPT2EwVLKb/OLMC1PGjQBGktSAUp3AfYxlg9RzVE8uB09hiSgbaX7x7JOkOVtDH0pj//JRwirRxDR2IXCnZls2yzOYsUEj/ba/Ys1G0WfSmAvISNgk8AI+nMoJSEhvaxmb4kmfvPikb2RsGR+5EwEht0bgjnXz1cCEaoA4bVGnqpuZOVMQRVmA1zU8k46CcIPADTqBOzVjQuBJtU734ieijJjtpHoHb47m9wzZLhtBtOByRBvzo/wSJiEI91pO+sMBSM3P9VQvfY66GtZjaMYXYZvAfUqwcRpYIVZUrpbekPqzOdVLi+irJFEkNTUCN73106mRSym5RhyAkqOnGOlZQRob6Q/fmzLY9DzqoekokpoSgV+isA5UckkPSikJlIjZVG9/Ty0Q/0tdenp1/5f5cQ6r2ul5wvC6TBQnOoQowQTGRAa1xVLSYAAqerC+jq7pla8sNxUd9rV2zY/qz28e7+0fbHWWxQFleGYkSU0YQkNSw4qJ7NbB4d7R+bzmN8xFlBIrdtRYMZMHOSwAyy4sL7dgbm5Jiego3jELQ2joRe1bKnpjKQV/+IMcK2i1f7H4QomCoiXSa4RRJDUhBN1+ohNpl8oXmuEhKDlg72nxE1JdhnrvwqHlAzLZCRMinRqmk7ZypUEpNQdKKXHQkhhQSpFwQmFzoE5f6B1ER0BKiqIExrdTNKmhW2ldjt6A1ZUQ5ZdA0dee5A3g8TLMn41T0oETHxVJp6aMHQ8JDk1qmMH+4UEqmxChtuSK3lpJwaFSsAyVSYx83wcghddDMkgpBKFh+4lmzRW9ReiKHg0Xx5MlroB0BNtPNey8FCQ19iHfWcjTfF5kYeWk2agrIMXglnbot8SuLYD+g5bAYCGetuDmRX48/aQA0kp2BxatJBl+axF0akBtEeK136DbT2AJPpXkpPS1UhOCQA+SIGkHZkFqdndo6GOET2q4OnaNjzNTQ569lFvBrwdiciGbBck4zO4MSVA6hb7mHH77iVvC7tMEGhMe79dsv4aO5r/f7B0h+zWGLCg9hxKG72PwTexem/dMjbK9JseN8X7NNZH8n++uycmdfXaXTmfRh4bffuKr+P1Sh06NUjyRDCW15OJp7vBITwaOJfZ7c02IJEHnR3sdwzPDbz/xK7g9b8LSqYFcJCMNRMAFl9e51QzTb6hW2gI2f3woF08DkN2xprI6dB9DKOLuWxDm7Sd2OXVweHTsXDxBwi1mWdPn/NE+3K8ZgOTOmN2hv7XQSY1QwN17IkxJDZNSiye7jUNNXVmyc3S4b9ivcV3LEXRqSAL/EAUuhyamVjTEDMf7NQP49uvAiwt5athODUi8CPyTPgzbTxqh7jdu7r056HWyYmtnvF9DteDroQEShdCdGnkPGD8zKiPfVbFSxW8cpADXDqV2pJDlBZacaNhe8iQMm9TI+/j4DzEkNcDTZBPJFuVYPAFpUZJjy8KeMOxJK/IsBv7YinH7iXbi0v/GgAZG6p8vgpkavog/E0UE334ChAOXnoWdhE1q5JkozGEMAmP7aUCL7n5GtgHUEkJ2apS5NnxnGnT7SWpRoujyEZp+3gcFYut5Swu0TLi0TZ1NxHY1XMDtJ0AIXJEzoHTv4uKne5eji7fJcSHMhpupUedLsVezeabGS1qS5OxnGBIAvv3rz7/8/NcPo5+SJCM/O2RSo84IY+dtXDsgIdAiA12u9Ue09Ovlu7/NdTNQhlu/vbv8VY4qYbef8Gf1FSn5RJMrRZJsKYOYKdHawqLvXYw+HWbGMuy9Hb2VRzBDJTXarD72U3gPLqWwZ+VBzN7+XoJRC/uEWYt062J0kKlkhiepk1SqC/6t+8/Rr2zYpEZ+ZR3znRlFbA4dQAp7eVd0f+9Y22VLqr3/9BFp+hT7/mIuU6n0upUK+Ee/N6xsdz98wYadqdHemcF470l9gqlTQ9PSTksp7I/1OnCckt8Uj9UdUTMhLf3950pl2IN4QDKZVP/Z9sE7kQnbqQnx7ppKaByjpXcOkXlgSzF1tJVWKw+TldLS5TtgmT0I101lMv1K5mT4zfD3n0D+E2b7SXlhncB6SVYVU1JD7tmAGQcxb+7t97ZEU6uCvj36OQOgAFr/OH00lx4Cg33w4GD0dynUTA2vv38Y/B1S9RHGpIZMG7nG6jw/BlxyYc8qhYd58V6OepkKUN7h3pvum+0hWIaV7vBZ/+1IpBl8QILT3yHFjRempAboUC+Arym7onAQk/JoWLC3gZH2gZfpdqnhcSZzANxq5eQGMFMpTKcGfQ8Y10xNbz/Rrb30uVzYJ0T5bFzPQxMVYd5/6Ge6w0qmt1/J3AQho38CjPbG9m/3SIrGT2p49F1uzOO7uZoxdgNfSlPeh0Fqf1sZ2JSkhdv9bUA4PKn0qKPtVLd7NMykAOFtlqJD7Dqg7+NjpzVBN9gULvhPEFcGYnIZbl9k33/RzXT7GRDuj/r7/d75Hogb0Eov2RDbT8YzFXDNlPebmKrjtZIkKVyJrCwJKNnk5cUJsM1M93D/pJLKwrSt0u8+E9+OWjQ+oWqk2GebqE9x337S7LClcC0kEjrYWLJJ+nL0SyYD3ClE6+33gZ/JbD34+mQ0GtA09uHpprNNcN8rsetJaHZooy8bWaCY/uhvYBWmANkQzuXsVYBnfVD5xwVch7jZiPl8GowTBWVCdKbG1g4dwTQVgtyW7b+by2S6IK/pH/a63WFmmAIL8d1tMkRf33LGEIk1sSBUGdUdKlyeCrNKEv6OyNsfQGnYTW0rxVP3BGjzt0u5QMQ1Uss5UUFKKO3A+1Kt2ZL1pawv/1iICpVC9/nF731QFp70Ot1uKgX+tfKLUj3hZt42Z335O6+N44hyqX3nzq1OJ7sAJIEJpoti4tLb0T9lJzrsy3Vw/+fRBWxa4deH1vPafJ25x7VvZRMLMlpEsqwsZPr55ejDp/3KuMT/cPHTr/AnuH0a5DDhIOcmcqVOdGiKZMfdRYZq/e/o7f8dnHS7vT/8/u62KMkJ4Q5u1VO0IfQMGFw7ETEfQginqt6PRqOLdxfgf35VX0vAfZ/b/uxLr2YGV4ucz0AIg8a92wuDhduX78c9ANx9fIfzS73a+yFdijchBaoReI8AOa5YcFM2pzNo3aM+dysGFarh0Cnpw12FjucIu67EchwqBDmbCyGDmc84nwXtdp43dycWFSYSzntR2MdGGG+A8Hsme0xGmsg67icyuK1StzPZXWIiH4+RwtIiYkDTkey+70bgYwJUE1MbQNw2ovkiFr/3W/AxLcPEODM1elF6DX8Yzf1+C8cSIz7C7LJFicwO/uWLXneUON4zE5uVwjaGUX+MtIZ/lbv3PTNOESM2TwMRl7U3nEFKs7PGhdhv8nFXkIOziStaqIwivIKMZaRiM8eH2hP1cd+Tg7OJKeIvKMVmttO5daueq5V5fPuUxdedXQ73rkWZtakltMx1p10ivO829Cn+7l1zuEU2vJmq6oJcd+60a2XY64kCC/mOPu/Oc5gDK4XgWtC4SmUiai5dfN9/aH9ia6CVuKCCqXZYJjAO5A4s9tfJ2t9DumGHyHe8EJX1BV8VgVw1QjXDK7owMsg9pA5x32EpIusLcpUILj47dJFgd8mSqw4hQ+9FoX5eWV/cVSrM5ssFuw/YIWRwxJ1OQlGY4ue5iNx8eLELFK6ETlcCAwskYvDzoSX4vdwhpt0mITh3qwe/tWSCwpWcMVwIV/1eljFx4QgHL+NBGPmlq7GJqTPjn3BC93MHFkc36k1INv8VENVbHvAIQ7wydGViacwEI5x+ROdA6JOQXJpuQxXs0+0ghE7JzXSIQz0RjHCaDdXTRP0Rkvj955hF8HAyvgmnNWh4hIkghGRjquoIRTjONdAHJCRXpi5H5Qi3VC04Ibk6ZZUGV3JJtrEIHbqokxLeuR7EJ5wmlyr4iBIYhFPjb/z6mOCE5GptGiyVr/ldgsEJSXJj8pbqnYmGIiQb5cmqkSsHsVAcQrKQm6QahZzd5ku0hHDfZlIOh7Pfe4mckCzUJ8LI8fXACsQkBEncBJwqX7MMIcRICOdurpaR82rHRE54taaKaaDhCEmymLsiRo7P+awjIiYEyzEX9qpQP3xCDm8BRkEIGNsxM3JCOxRfaMKYbTWcfUZECBg3iFggOZ7YCM0XCSHwq81S5MbKCaUmtv9EJRJCIMW6EKEiOV6oh1x+mkRFCKSa4yKBBE/JVSNRnywREgJrDQ8p4wWqcL0kUkIghUadwLVXYJtEvRGd9hSJmhDKajMnj+cFgYNTLLlmBK7TInEQQilWN9pl3gen/MJtuV2vFtl4vklchFAKxcZavU0IgjJgZAKDaIJAtOtL1WLUlolKnISqFIor1eZSPScPv0Epl2rtXH2pWW3EiqbK/wOnqS/Ii8Y8ZgAAAABJRU5ErkJggg==" className="CrytpImg"/>
             <p className="source">Protected by insurance</p>
             <p className="sourcecomm">Cryptocurrency stored on our servers
              is covered by our insurance policy.</p>
             <p className="blue">Learn how your crypto is 
             covered by our insurance policy</p>
           </div>    
           
           
           <div className="Advert">
             <img src="data:image/jpeg;base64,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" className="CrytpImg"/>
             <p className="source">Industry best practices</p>
             <p className="sourcecomm">Coinbase supports a variety of 
             the most popular digital currencies.</p>
             <p className="blue">Learn how we implement industry 
             best practices for account security</p>
           </div>

           </div>




           <div className="Mon">

           <div className="mo">
              <div className="money">$335B</div>
              <div className="moneyFor">Quarterly volume traded</div>
           </div>


           <div className="mo">
             <div className="money">100+</div>
             <div className="moneyFor">Countries supported</div>

           </div>


           <div className="mo">
             <div className="money">56+M</div>
             <div className="moneyFor">Verified users</div>
            </div>









           </div>


            <div className="NewCreate">Get started in a few minutes</div>
            <div className="NewCoinbase">Coinbase supports a variety of the 
              most popular digital currencies.</div>



           <div className="Add">
           <div className="Advertise">
           <img className="NewCrytpImg" src="data:image/png;base64,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"/>
           <div className="Newsource">Create an account</div></div>

           

          <div className="custhr"></div>

           
           <div className="Advertise">
           <img className="NewCrytpImg" src="data:image/jpeg;base64,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saItYANhoAAADYBQArGLbstoas/v7sZtGmoR6zab4rxta/Ju+x2tzxK0+tJv7+nIjOTJrCLWygKkmJQFQAGygMmhSd0l6790Va9+fw57IbwSlkxiqZl4mM4NKdpJ+fjtuYtSFt901dcr2+TCYaKAAkgFCoANno/H7IzfKXyf7m0IubbReLb7Mr2XtcO5g1Tp70bOEG9n3wKGTOaikln+2a8878crGME8muSxoAASYkLM2gn2Zr2FZ+958s7GPSp3zZkQk07o1qOSynUxojavEpxVSok9vUguKybdzV1ajk7v6LuSE5t7fvki0lRwapSyVABkYgAABIyMO1B53Tyd89m22zK/FGOmelau5Wvu975shrJKeNSlWpfJbL35vi/23HmCpIAABAAABQyI1XFqcdySfO1s+ZjlYTa2fa70GiUzaVcSuqpzScmuxHck97NXOTbuxKTbuyhCikTKWQVAJMQUKlAC+lTcnZHuqiirOOdmrZpPNXuuOVnbajGjKwnNt3e0hrUyTwjZ4DSF+zN8n8EzaEXNno7HezJ8n8mSaJw3o2oAJNJFkVKgg6yhUAAAAAAAAoAACoAAAAAAAAKAqAAAAAAAAUKgAoCoABayoANsACDUf//Z"/>
           <div className="Newsource">Link your bank account</div></div>

          

        <div className="custhr"></div> 

        
           <div className="Advertise">
           <img className="NewCrytpImg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREXFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNyguLisBCgoKDg0OFxAQGjcdHR0rLSsrLSstLS0rLS0rKystLTctLS0tLSstKy0tLSsrLi0tKzUtLS0tNy0rLS0rKzgtLf/AABEIAKoBKAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIFBgQDB//EAEIQAAIBAgQBCAYHBgUFAAAAAAABAgMRBAUSITETFSJBUVKi0QZTYXGSsRQjQnOBkaEyNGJyweF0grKzwiQzQ/Dx/8QAGgEBAQADAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAQEAAgICAgEDBAMAAAAAAAABAhEDEgRRITFBIjJhIzNCgQUTFP/aAAwDAQACEQMRAD8A2UUTSBIkkdDiCQwAAAACEAAAgGBQhErCAps8y/UnWgulH9tL7Ue33ozsI2a95urGWzvB8jU1RVoVOlG3BPrj/wC9pz83Hv5d3ic2v011YSv0o+7c1WWzsk0YXCVt0bLJqinH2o4cpqvZxy7YryUrx3MznU5ScqMXbW71H2Q7Px3/AANBB8UYTNqMqmLrwlOWnXtG702ttsTL5OGfqcma+kuFwC0QtWrJWVODuk/4pcF8ygw2eV8TUcqlR6aj2hHaEfZbr/E9vSjI4um5xVp01dNda60zKYDEypS0y3Sd01xRnjJYclyxy+X0LCVY8GrP9DqnOVrRbs+wocszWlWjZy0TXHVtv2osauZwowctpy+zFNO7IyslW2Fq8k05Pi9l1tmwy2rqSvtfqPn+VRlOSqVneb4LqiuxG0yqrdpE/JlP0unOKfTjLvRs/ev/AKcSRbZlHVST7sk/6f1KtHo8N3i+d8nHXJf5NIkkJEkbXOaRJCRJBQiSEhkUxghoCNhNExNAebQyTQA04ENCQwAAAAAACAAAAAYFCEMAqJy5lg1XpOHB8YPskdhFolm1l1dxhVeErNNNNpp9TvwNP6O4mztcq/SXDaasaqW1Rb/zr+1v1PDKsS4zj2XPP5sdPe8XOZY79vo1J7p9quZD0ipuljm7bVYRkn7eD+S/M02Dr3USq9NMPenSrL/xz0y/ll/dL8zVv4bsf05xSYykqkH7VZnzLH4GpGU7Rb0Skk12Jn06jVTju+q79xX08vUoOTW85Sl+DexhMtV1Z4TKMpk+GjOC7ev3nfKioyhsv2kSxODlh6jqU1t9qPVJeYVqsZRjUi9lJN+x33Rntqs18NBhZWsafKJdZlsNayZpMrnZIi1pJLXSkv4X8rlSi2wctt+srJxtKS7JNfqdvjX4seF5+OspSRJCRJHS4DQ0JEkAwAApkiIwpgAyCLQDAqK8BAAwEMAABhAAAVQADAQDABCZITArc7w/KYeouuK1x964/pcyFGr0lZOTT6tor3s3s0mrPg9n7j57WTp1JQbfRbjpiru6djl8ifl6XgZ/cbrKcXKSjeMXsuE02XWIoLEUKlJ3vKDSUuqXU/zsYbI6klKLUfjl+tlc3OAqydlLTZ8NL4HDj8XT1uSbxljBqnOk2qkGu3Utj2WI2NZjqempJWTT3s12nDPAUZcaUfw2+R1f+WWblcE/5O4245T6ZbGyUkzOYmk4uWlO1RWa/i7T6RLKcO/sNe6TMtmNGny8oU7uEHa7tvLrNfJxXjm7XTweVjz5axiqy6WJUYpam13rNGqymeKVnKNO3vaZ54HB8LIvsHhXte5p+3ZdRdYSb0Rb2fWc1WWqUn2tsNVlZfiRsd/BhcZuvn/N5sc8tY/gIkgsCOhwGMEMKBiGADEMKBiABgICCuAVwKxSAQwGMQFDAACmADCEMACkJkhAeckY70jw+jEtrhUSn/R/qjZMovSrD3pQqLjCWl+5/wB/mauWbxdHi5deSfyq8vqaWja5TVTS7drmCwcLtbpGqyyUqaUr3gnFS9l+B5uXxX0OE7Y6Xubx6UJd6Pyf9zhO/MndUv5W/kcNj0+L9kfO+RP6lVueY7kKVov6ypeMfYuuRnMDhpSd7/me+ZV+Xryl9mL0x9yO7LcPuedz8nfPU+o+i8Hxv+nh3fu/K4ynCOybLObS2R50Vogu1/ogOjx+H/KvN8/y7u4Y/wCzRJEUSO15BoYICBgAwAYhhQAAAAAAAAAFYAh3KxMYkMBjEMKYxDQDGIYAAwARFkhMCLOfHYblqVSn3oNL38V+qOhmX9JZyWIjaUl9THg2vtSNfJl1xbuDDvnJvSuwi3XtNnkdHlISp96Lt77bGMw80rXdveXmHz3kY2opynw1NWjHzPNyl2+imc66/LQYus1yceTqScacb6Y3Sb6jixcqkqVRU6NbW4NRvHSr+8PRrM62IxHJ1ZqUNE5W0xTumutfiarQr8F+VzdjzZY49Xn8nBheTvfv7fOcLk2KutVBr/NHzNLl+WTpxcpwlsr8LmoirdX6BWX1c/5ZfI04cU26+Xz87hZJpnHK40ecT0R6smnzltt3UkSRFEkUSQCGQMYgCmMiMBiAAABAAwFcQFYmO54qY1MqPa47nkpklID0uNM81IkpAeiYyCY0wJokQTGmBMQrjABMYmQQZmPSZf8AUQ+5j/qkaeRmPSd/X0/uv+UjVz/sdXif3Iq0uHu/oetOJUYl4pTbpWcNtK6HZvx3JYXF4tThGdFaZTjGUtD2TaTd0zj09S1tvQ9f9XH7uZuEjFeiP73H7up8i29MJZgqVJZXFutKo1UaVHo09L3+s2W9jHW6xyeXo3muIrZtm2Hq1XOjhnTVCnpglTTvfdK7/Fs1Vb/tz/kl8j4xlOS5njMdjqSxXIYmGh4ybqyhrb4L6pWl8j67l+FlQwVOhOfKTpYeNOU9+nKMLOW+5t18tGf0ook0RiiaO95KSJIiiQU0NCGRQAAAwAAAAEAxAAAAABm1WGqpXa2PWwiyVb2jVYrOUY+VYFqqxJVip5Zhy7GxcqsSVYpfpD9ovpMvaNi9VZElWXaUH0mQfSp9g2NCqyJKsjOfS59gni6nYNjSqqh8ojMPF1SLxVXtY2NQ5Iy3pXK1al93/wAmL6TV7zKrO6k3Kk3eTtJe5XNXN84unxbJyTZxnsddBlKsRbipL/Kzsw2Mj2r8zhev8X6rYeiX73D7uf8ApZt48TCeh9RPFU7P7E14WbxNJ8Ug1Zs9kGR1qGZ5njKnJ8ji3DkdMrz24uStt+Zpqi6Ev5ZfIhGova/wt8wqVHplw/ZZtxlc+VZ1RJJHo4isdzzNEhjsAUAAAAAADAAAAAApAMQQAAAZZYUf0Qs1ElpCKxYMawRZpEkgKxYEksAWSQ0UVywBJZf7CwRICvWXoksuR3jRDThWXIay2J3gDTjWXRJLLodh1jC6cnN9PsPHEZbSbV4JliedRBYrVllH1UfxRLmvD9dCk/fBM7AMdMt0sry+jTqxlCjTg994wUX+hoYu3AqMGukWkWas58unit09VIKktmQuKq9jGM79K+fEVxz4kTojhv2dwEBUMQCAkBEYDAQwAYhgAABFIBiKK1DBDQYiw7AMAGkAygGgGRQNAADQxDAYxIYDPOZMhMDzBIGNEZR0YXiWMWVuHO6MjVk6eP6e1yNR7EdRGbMYztc1QgSmedzfHJl9mAgKwMBDAYCACQCQ0AwACBgABQIGBUVyJI6sNldepCFSELwqQjOL1RV4yV07N9jPZZNiPV+OHmTtF6ZenCB3rJ8R6tfHDzHzPiPVr44eY7Q6304BndzPiPVr44eY+Z8R6vxw8x2i9b6cA0d3NFf1a+OHmHNFf1a+OHmO0Ot9OIDu5or9xfHDzDmiv6tfHHzHaJ1y9OIZ280V+4vjj5hzTX7i+OPmO0OuXpxDO3mmv3PHHzDmmv3PHHzHaL1vpxkJHfzVX7njj5kXlNf1fjh5jtDrfSvY0dvM+I9Wvjh5jWUYj1a+OHmS2MpjXPSOqLHDKq6+x44+Z7xy6t3PFHzMLpuxeNyMmdXN9Xu+KPmJ5dW7nij5mLJXzPM75ZXW7nij5keaq/c8cfM2SxoyxriGdnNVfueOPmHNVfueOPmZdow6304wOzmqv3PHHzDmqv3PHHzHaHW+nGM7Oaq/c8cfMfNdbueKPmO0Ot9OMZ1811u54o+Y+bK3c8UfMnaHW+nIM6+bK3c8UfMOba3c8UfMbi9b6cgM6+ba3c8UfMXNlbueKPmNxOt9ONjOp5ZX7nij5gNw630tcj/c8J/hsP8A7aO04si/c8J/haH+2juNLqIBgAgGAAIYAIBgAgGAHHmtepSoTqUoa5xs1HROo2rq9ox3k7XstveuJSxzXGUlPVhqtVOWJlTfIVXNfWV+ThJRvt0Ke/UpL2N6VgBlnmeYU9X1ardGKSeDxNOMZKrWUm3HU5bRpKyX21LgnfoxWY41RnppaJOOIcHHC16zhoqOMdW6TvGN1bd6lZbXehYAZ2ea4tynD6POEemlVWGxEmpJzUYW621GMtf7K1We/H3o5jiFh6DnQnGtKahXTo1qvJRtKz6KWu7ilqWy1ptdRdgBnKea46drYVR2V3OhXVpN004Wur6dculwlo2t1XEK1SVNzcOSvQjNO0qlSFVxblF07Xeno9d3urK2/WAGZ+l4x0KVWDxDn9DpOrCrhtEViJuMHLRyetuNqk3FdkdrMaxeMqcrZYmnKVKi6SVOOmlVkoR0Sc6PS6UpSck3ZJ3UXsaQAM/iamNpuo6TxOIiqlKCvTwqnaPSnOKtC6lqUOu2mTXUeCxuN5RxtiNKqtRn9HvCq9dPoNOnFwgoOe+92v2naxp2AFfkNWrOhevyjmpuOupHQ6isuko6IOKvfZxvtxfEshIYAIYAIYAAAAAAAAAAAAAAAf/Z"/>
           <div className="Newsource">Start buying & selling</div></div>

        </div>
           



        
           <div className="Specific">
           <div className="NewEarn">Earn up to $25 worth of crypto
           <p className="discover"> Discover how specific 
           cryptocurrencies work —
             and get a bit of each crypto 
             to try out for yourself.</p>
           <div>
             <button className="startButton" > Start Earning</button>
           </div></div>

           <div className="spacedivImg">
             <img src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp" className="spaceImg"/>
           </div>

               </div>
           
   




           <div className="footer">
           <div className="selectCopyR">
             <div className="Newtitle">coinbase </div>
             <form action="" method="GET">
             <select name="languages"   className="language">
             <option value="English" selected="selected">English</option>
             <option value="Deutsch">Deutsch</option>
             <option value="Espanol-Espana">Espanol-Espana</option>
             <option value="Espanol-America Latina">Espanol-Ameria Latina</option>
             <option value="Francais-France">Francais-France</option>
             <option value="Bahasa Indonesia">Bahasa Indonesia</option>
             <option value="Italiano">Italiano</option>
             <option value="Chinese">Chinese</option>
             <option value="Polski">Polski</option>
             <option value="Portugues-Brasil">Portugues-Brasil</option>
             <option value="Portugues-Portugal">Portugues-Portugal</option>
             <option value="Pytich">Pytich</option>
             <option value="Turkish">Turkish</option>
             <option value="Turcke">Turcke</option>
             </select>
             </form>

             

             <div className="copyR">© 2021 Coinbase</div>
             <div className="Blog">Blog • Twitter • Facebook</div>

           </div>

          

        


        <div className="comLearn">
           <div className="companyAgain">
             <ul>
             <li className="firstListItem">Company</li>
             <li><a href="">About</a></li>
             <li><a href="">Careers</a></li>
             <li><a href="">Affiliates</a></li>
             <li><a href="">Blog</a></li>
             <li><a href="">Press</a></li>
             <li><a href="">Investors</a></li>
             <li><a href="">Legal & privacy</a></li>
             <li><a href="">Cookie policy</a></li>
             </ul>
           </div>




           <div className="LearnAgain">
            <ul>
             <li className="firstListItem">Learn</li>
             <li><a href="">Browse crypto prices</a></li>
             <li><a href="">Crypto basics</a></li>
             <li><a href="">Tips & tutorials</a></li>
             <li><a href="">Market updates</a></li>
             <li><a href="">What is Bitcoin?</a></li>
             <li><a href="">What is crypto?</a></li>
             <li><a href="">What is a blockchain?</a></li>
             <li><a href="">How to set up a crypto wallet</a></li>
             <li><a href="">How to send crypto</a></li>
             <li><a href="">Taxes</a></li>
             </ul>
            
           </div>


           </div>






          <div className="IndivBussDev">
           <div className="IndivAgain">
           <ul>
             <li className="firstListItem">Individuals</li>
             <li><a href="">Buy & sell</a></li>
             <li><a href="">Earn free crypto</a></li>
             <li><a href="">Wallet</a></li>
             <li><a href="">Card</a></li>
             </ul>

           </div>



            <div className="BussAgain">
            <ul>
             <li className="firstListItem">Businesses</li>
             <li><a href="">Prime</a></li>
             <li><a href="">Custody</a></li>
             <li><a href="">Asset Hub</a></li>
             <li><a href="">Commerce</a></li>
             </ul>
            
           </div>


             <div className="DevAgain">
            <ul>
             <li className="firstListItem">Developers</li>
             <li><a href="">Coinbase Cloud</a></li>
             <li><a href="">Connect</a></li>
             <li><a href="">Commerce</a></li>
             <li><a href="">Pro</a></li>
             <li><a href="">Bison Trails</a></li>
             <li><a href="">Rosetta</a></li>
             <li><a href="">USDC</a></li>
             </ul>
            
           </div>

           </div>

           
           <div className="SupportAgain">
            <ul>
             <li className="firstListItem">Support</li>
             <li><a href="">Help center</a></li>
             <li><a href="">Contact us</a></li>
             <li><a href="">Create account</a></li>
             <li><a href="">ID verification</a></li>
             <li><a href="">Account information</a></li>
             <li><a href="">Payment methods</a></li>
             <li><a href="">Account access</a></li>
             <li><a href="">Supported crypto</a></li>
             <li><a href="">Supported countries</a></li>
             <li><a href="">Status</a></li>
             </ul>
            
           </div>

 
 </div>


 </div>















































                

                { 
                  this.state.showMenu 
                ? (
                <div className="Individuals" ref={ref => this.submenuBody6 = ref}>
                <div className="Learn1" >
                <div className="TiTu" ><a href=""><span>{">"} </span> Tips & Tutorials</a></div>
                <div className="TiTu"><a href=""><span>{">"} </span> Crypto basics</a></div>
                <div className="TiTu" ><a href=""><span>{">"} </span>  Market updates</a></div> </div>
                <div className="Learn2">
                <div className="other"> Crypto questions answered</div>
                <div className="comment" >Guides and explainers 
                for your Crypto questions</div>
                <div className="SeeMore" ><a href="">See all articles</a></div> </div>
                 </div>

                ) 
                : (
                  null
                )
                }

                               {
                  this.state.showMenu2 
                ? (
                <div className="IndividualsR"  ref={ref => this.submenuBody7 = ref}>
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1rFQCqoq8hipvVJSKdU3fQ/21ab733af7a8ab404e29b873ffb28348/coinbase-icon2.svg"/></a><div className="IndivBAS"><a href="">
                Buy and Sell</a></div><div className="IndivBAScomment"><a href="">Buy,
                sell and use crypto</a></div>
                </div>
                
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/2FKR6IDTINoO7Nt9Bqg6W9/bddc23743128cc3033b4d2f84d4ed103/earn-icon.svg"/></a><div className="IndivBAS"><a href="">
                Earn free crypto</a></div><div className="IndivBASEcomment"><a href="">Buy,
                Learn and earn crypto</a></div>
                </div>

                <div className="secondIndivNew"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/4mo5MpvlVj04YOVoyLr7wM/4f246f6bd1ef15915397eb56d5945477/PrivateClient_-_Round.svg"/></a><div className="IndivBAS"><a href="">
                Private Client</a></div><div className="IndivBASEarncomment"><a href=""> For trusts, 
                family offices, UHNWIs</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1VeWI2Rpj7YCnzeKoPpsMX/419fa422554e8fa3a9ec301eaa90dcfd/round-wallet.svg"/></a><div className="IndivBAS">
                <a href="">Wallet</a></div><div className="IndivBASWalcomment"><a href="">The 
                best self-hosted crypto wallet</a></div>
                </div>
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/3amX3womuq37keL9QF44SX/11830020dd38695de3ee3d7110eb7b38/round-card.svg"/></a><div className="IndivBAS">
                <a href="">Card</a></div><div className="IndivBASWalcomment"><a href="">Spend crypto,
               earn crypto rewards</a></div>
                </div>
                </div>
  
                <div className="IndivGroup3">
                <div className="otherIndiv"> Crypto tools for everyone</div>
                <div className="commentIndiv">Buy, sell and 
                spend cypto on the world's on trusted cyrpto exchange</div>
                <div className="SeeMore"><a href="">See all products</a></div> </div>
                 </div>
                 </div>


                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu3
                ? (

                <div className="IndividualsB"  ref={ref => this.submenuBody8 = ref}>
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1B2lWSiOAFK6CitniZDOm6/a38890c20ba91c7d730fde6eb1d9bb3e/prime-icon.svg"/></a><div className="IndivBAS"><a href="">
                Prime</a></div><div className="IndivBASPCcomment"><a href="">The 
                prime brokerage platform</a></div>
                </div>
                
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/EtdyFCX7iknLgMd8QmEFE/3b11e239601461f579b1fd6e14284b36/custody-icon.svg"/></a><div className="IndivBAS"><a href="">
                Custody</a></div><div className="IndivBASPCcomment"><a href="">Institutional-
                grade offline storage</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1ke3aZrKAkc57nbjxVTMtc/85533126e5dfd8d62907775d3b124cf9/commerce-icon.svg"/></a><div className="IndivBAS"><a href="">
                Commerce</a></div><div className="IndivBAScomment"><a href="">Accept crypto from 
               anyone</a></div>
                </div>

                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src="https://images.ctfassets.net/q5ulk4bp65r7/1oqbWFudTFmn217o4gSrPe/8adfd4267db4cbbf5d5521038a58a0a1/asset-hub-icon.svg"/></a><div className="IndivBAS"><a href="">Asset Hub
                </a></div><div className="IndivBAScomment"><a href="">List your asset on 
              coinbase</a></div>
                </div>
                </div>
  
                <div className="IndivGroup3">
                <div className="other"> Built for businesses 
                and institutions</div>
                <div className="comment">Crypto solutions for institutional investors, 
                family offices, and businesses</div>
                <div className="SeeMore"><a href="">See all products</a></div> </div>
                 </div>
                 </div>

                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu4
                ? (
                  <div className="IndividualsD"  ref={ref => this.submenuBody9 = ref}>
                  <div className="Indiv1">
                  <div className="Indiv1Group1">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Connect</a></div><div className="IndivBASDcomment"><a href="">Enable users to buy,
                  l, and store crypto</a></div>
                  </div>

                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Custody</a></div><div className="IndivBASDcomment"><a href="">Institutional-
                  grade offline storage</a></div>
                  </div>
    
                  <div className="thirdIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Pro</a>
                  </div><div className="IndivBASDcomment"><a href="">Programmatically
                 manage crypto</a></div>
                  </div>
                  </div>
  
                  <div className="Indiv1Group2">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Bison Trails</a>
                  </div><div className="IndivBASDcomment"><a href="">Pioneering blockchain 
                  infrastructure</a></div>
                  </div>
  
                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>WalletLink</a>
                  </div><div className="IndivBASDcomment"><a href="">Link your DApp to
                 mobile wallets</a></div>
                  </div>

                <div className="thirdIndiv">
                <div className="IndivBAS"><a href=""><span>{">"}</span>Rosetta</a></div>
                <div className="IndivBASDcomment"><a href="">Integrate your blockchain 
                everywhere</a></div>
                  </div>
                  </div>
    
                  <div className="IndivGroup3">
                  <div className="other"> Build with Coinbase Cloud</div>
                  <div className="comment">Tools and APIs for 
                  developers building with crypto</div>
                  <div className="SeeMore"><a href="">Explore coinbase</a></div> </div>
                   </div>
                   </div>

                ) 
                : (
                  null
                )
                }               {
                  this.state.showMenu5
                ? (
                  <div className="Individuals"  ref={ref => this.submenuBody10 = ref}>
                  <div className="Company1">
                  <div className="TiTu"><a href=""><span>{">"} </span> About</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Careers</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Affiliates</a></div>
                  </div>

                  <div className="Company2">
                  <div className="TiTu"><a href=""><span>{">"} </span>   Support</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span>   Blog</a></div>
                  </div>
                  <div className="Company3">
                  <div className="other"> Learn all about Coinbase</div>
                  <div className="comment">We're building an open 
                  financial system for the world.</div>
                   </div>
                   </div>

                ) 
                : (
                  null
                )
                }
                
      </div>
     


}



}










export default App;
