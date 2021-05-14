import './App.css';
import React from "react";


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

    this.closeMenu2 = this.closeMenu2.bind(this);


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
      },() => {document.addEventListener('mouseout', this.closeMenu2);
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
  else if(this.submenuBody5 && this.submenuBody4.contains(nativeEvent.target)) return

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










closeMenu2(nativeEvent) {
 if(this.submenuBody1 && this.submenuBody1.contains(nativeEvent.target)) return

else
  this.setState({
    showMenu: false,
    showMenu2: false,
    showMenu3: false,
    showMenu4: false,
    showMenu5: false
   }, () => {
      document.removeEventListener('mouseout', this.closeMenu2);
    
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
                  onMouseOver ={this.showMenu5}><a href=""></a>Company</div></a>
  
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
            <a href=""><div class="bitcoinLink"><img src="" className="bitlink"/>Jump start your portfolio</div></a>
            <div className="Jump"><h1>Jump start your crypto portfolio</h1></div>
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
            <a href="">*Terms apply</a></div>
            </div>

            <div className="circle"></div>
            <div className="mobile"></div>

            <table>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>Chart</th>
                <th>Trade</th>
              </tr>
              <tr>
                <td className="Numbers">1</td>
                <td><img src=""/>Bitcoin <span className="b">BTC</span></td>
                <td className="price">GHS 324,401.28</td>
                <td className="change">+1.27%</td>
                <td><img src=""/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>              
              <tr>
                <td className="Numbers">2</td>
                <td><img src=""/> Ethereum<span className="b">ETH</span></td>
                <td className="price">GHS 24,637.82</td>
                <td className="change">+8.07%</td>
                <td><img src=""/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">3</td>
                <td><img src=""/> Bitcoin cash<span className="b">BTH</span></td>
                <td className="price">GHS 8,471.21</td>
                <td className="change">+6.79%</td>
                <td><img src=""/></td>
                <td ><button className="buy">Buy</button></td>
              </tr>                      <tr>
                <td className="Numbers">4</td>
                <td><img src=""/>Litecoin <span className="b">LTC</span></td>
                <td className="price">GHS 2,121.98</td>
                <td className="change">+3.50%/</td>
                <td><img src=""/></td>
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
              <div className="Ampdiv"><div class="AmpImg"><img src=""/></div><div className="Amp"><h2>Ampleforth</h2>
                <h2>Governance Token</h2></div>   <div className="forth"><h3>FORTH</h3></div>
                <div class="E">Earn $3 FORTH</div></div>
             
                <div className="Ampdiv"><div class="AmpImg"><img src=""/></div><div className="Graph"><h2>The Graph GRT</h2></div>
                <div className="forth"><h3>FORTH</h3></div> <div class="E">Earn $3 GRT</div></div>

                <div className="Ampdiv"><div className="Ampdiv"><div class="AmpImg"><img src=""/></div><div className="Stellar"><h2>Stellar Lumens LXM</h2></div>            
                <div className="forth"><h3>FORTH</h3></div><div class="E">Earn $10 XLM</div></div>

                <div className="Ampdiv"><div class="AmpImg"><img src=""/></div><div className="Compound"><h2>Compound COMP</h2></div>
                <div className="forth"><h3>FORTH</h3></div><div class="E">Earn $9 COM</div></div>
              <div className="View"><a href="">View more></a></div>
            </div>

            
            
            </div>




          <div className="Create">Create your cryptocurrency portfolio today</div>
          <div className="Coinbase">Coinbase has a variety of features that
             make it the best place to start trading</div>










            <div className="DocImage">

              <div >
                <div className="ManageImg"><img src="" /></div>
                <div className="Manage">Manage your portfolio
                <p className="Buy">Buy and sell popular digital currencies,
                   keep track of them in the one place.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src=""/></div>
                <div className="Manage">Recurring buys
                <p className="Buy">Invest in cryptocurrency slowly over
                   time by scheduling buys daily, weekly, or monthly.</p></div>
              </div>

              <div>
                <div className="ManageImg"><img src="" /></div>
                <div className="Manage">Vault protection
                <p className="Buy">For added security, store your
                   funds in a vault with time delayed withdrawals.</p>
                </div>
    
              </div>

              <div>
                <div className="ManageImg"><img src="" /></div>
                <div className="Manage">Mobile apps
                  <p className="Buy">Stay on top of the markets
                     with the Coinbase app for Android or iOS.</p>
                </div>
              </div>
              
            </div>

           <img src="" className="phoneImg" />

          

      <div className="customHr"></div>
           

           <div className="Create">The most trusted cryptocurrency platform</div>
             <div className="Coinbase">
             Here are a few reasons why you should choose Coinbase</div>






 



      <div className="Ad">
           <div className="Advert">
             <img src="" className="CrytpImg"/>
             <p className="source">Secure storage</p>
             <p className="sourcecomm">We store the vast majority of the 
             digital assets in secure offline storage.</p>
             <p className="blue">Learn how Coinbase keeps your
              funds safe and secure </p>
           </div>



           <div className="Advert">
             <img src="" className="CrytpImg"/>
             <p className="source">Protected by insurance</p>
             <p className="sourcecomm">Cryptocurrency stored on our servers
              is covered by our insurance policy.</p>
             <p className="blue">Learn how your crypto is 
             covered by our insurance policy</p>
           </div>    
           
           
           <div className="Advert">
             <img src="" className="CrytpImg"/>
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
           <img className="NewCrytpImg" src=""/>
           <div className="Newsource">Create an account</div></div>

           

          <div className="custhr"></div>

           
           <div className="Advertise">
           <img className="NewCrytpImg" src=""/>
           <div className="Newsource">Link your bank account</div></div>

          

        <div className="custhr"></div> 

        
           <div className="Advertise">
           <img className="NewCrytpImg" src=""/>
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
             <img src="" className="spaceImg"/>
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
                <div className="Individuals">
                <div className="Learn1">
                <div className="TiTu"><a href=""><span>{">"} </span> Tips & Tutorials</a></div>
                <div className="TiTu"><a href=""><span>{">"} </span> Crypto basics</a></div>
                <div className="TiTu"><a href=""><span>{">"} </span>  Market updates</a></div> </div>
                <div className="Learn2">
                <div className="other"> Crypto questions answered</div>
                <div className="comment">Guides and explainers 
                for your Crypto questions</div>
                <div className="SeeMore"><a href="">See all articles</a></div> </div>
                 </div>

                ) 
                : (
                  null
                )
                }

                               {
                  this.state.showMenu2 
                ? (
                <div className="Individuals">
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">
                Buy and Sell</a></div><div className="IndivBAScomment"><a href="">Buy,
                sell and use crypto</a></div>
                </div>
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">
                Earn free crypto</a></div><div className="IndivBAScomment"><a href="">Buy,
                Learn and earn crypto</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS">
                <a href="">Wallet</a></div><div className="IndivBAScomment"><a href="">The 
                best self-hosted crypto wallet</a></div>
                </div>
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS">
                <a href="">Card</a></div><div className="IndivBAScomment"><a href="">spend crypto,
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

                <div className="Individuals">
                <div className="Indiv1">
                <div className="Indiv1Group1">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">
                Prime</a></div><div className="IndivBAScomment"><a href="">the 
                prime brokerage platform</a></div>
                </div>
                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">
                Custody</a></div><div className="IndivBAScomment"><a href="">Institutional-
                grade offline storage</a></div>
                </div>
                </div>

                <div className="Indiv1Group2">
                <div className="firstIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">
                Commerce</a></div><div className="IndivBAScomment"><a href="">Accept crypto from 
               anyone</a></div>
                </div>

                <div className="secondIndiv"><a href="">
                <img className="ImageIndiv" src=""/></a><div className="IndivBAS"><a href="">Asset Hub
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
                  <div className="Individuals">
                  <div className="Indiv1">
                  <div className="Indiv1Group1">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Connect</a></div><div className="IndivBAScomment"><a href="">Enable users to buy,
                  l, and store crypto</a></div>
                  </div>

                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>
                  Custody</a></div><div className="IndivBAScomment"><a href="">Institutional-
                  grade offline storage</a></div>
                  </div>
    
                  <div className="thirdIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Pro</a>
                  </div><div className="IndivBAScomment"><a href="">Programmatically
                 manage crypto</a></div>
                  </div>
                  </div>
  
                  <div className="Indiv1Group2">
                  <div className="firstIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>Bison Trails</a>
                  </div><div className="IndivBAScomment"><a href="">Pioneering blockchain 
                  infrastructure</a></div>
                  </div>
  
                  <div className="secondIndiv">
                  <div className="IndivBAS"><a href=""><span>{">"}</span>WalletLink</a>
                  </div><div className="IndivBAScomment"><a href="">Link your DApp to
                 mobile wallets</a></div>
                  </div>

                <div className="thirdIndiv">
                <div className="IndivBAS"><a href=""><span>{">"}</span>Rosetta</a></div>
                <div className="IndivBAScomment"><a href="">Integrate your blockchain 
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
                  <div className="Individuals">
                  <div className="Company1">
                  <div className="TiTu"><a href=""><span>{">"} </span> About</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Careers</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span> Affiliates</a></div>
                  </div>

                  <div className="Company3">
                  <div className="TiTu"><a href=""><span>{">"} </span>   Support</a></div>
                  <div className="TiTu"><a href=""><span>{">"} </span>   Blog</a></div>
                  </div>
                  <div className="Company4">
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
