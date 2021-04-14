<template>
  <div>
    <div>
      As is explicitly demonstrated in the bar graph above,
      we can observe that the way of payment in a certain city of China has experienced a dramatic change in the 3 years from 2015 to 2017.
      The share of way of payment in cash declined dramatically from 80% in 2015 to 30% in 2017,
      while taking a look at the statistics of that in wechat and Alipay ,we can see that it ascended gradually from 20% in 2015 to the maximum at 70% in 2017.

      What exactly contributes to this phenomenon? Reasons can be listed as follows:
      the authorities in developing countries have issued some relevant but preferential policies to protect and promote the development of the new technology,
      as a result of which is emerging ways of payment.Moreover,with the accelerating pace of society and economy,
      people in mounting numbers can afford to buy daily commodities which were once deemed impossible.
      What’s more, as regards their safety, it is under control in organization involved.

      The trend that new ways of payment will occupy the increasing part of our market will continue in the coming years.
      To keep the market in a splendid state, it is imperative and essential for the authorities concerned to take proper actions to regulate
      the trading operation and keep a close watch on the consumer market.
    </div>
    <div>
      As is explicitly demonstrated in the line graph above,
      the 6 years between 2007 and 2012 have witnessed some remarkable changes with regard to the statistics of Chinese students studying abroad.
      To be concrete, the number of Chinese students to pursue a further study in other countries has experienced a steady gain of 50 thousand,
      from roughly 10 thousand in 2007 to approximately 60 thousand in 2012.

      Theoretically speaking, several fundamental driving forces could account for this phenomenon in the graph,
      with the following three weighing the most from my perspective.
      Previously, with the accelerating pace of the economy and society,
      parents in mounting numbers have possessed sufficient financial resources,
      as result of which enables them to afford their children’s higher education in developed countries.
      Simultaneously,  owing to desirable education facilities and atmosphere in advanced countries
      like the United States and British,many students study overseas can equip them with a preferable education than those domestic student.
      Ultimately,so fierce is the competition of the job market that an increasing number of students have inclined to be an overseas returnee to
      have competitive advantages over others.

      All in all, we may inevitable conclude that the fashionable trend will continue in coming years.
      Yet, we should take it rationally. Although it is profitable for broadening people’s horizons.
      And it is advisable for the authorities concerned to pay closer attention to the quality of domestic university education.
    </div>
    <div>
      The pie chart above reveals clearly the percentage of graduates’ inclinations for work option.
      Based on the data given above, the proportion of salary and welfare ranks the highest,
      at approximately 52%, over a half of the total. By contrast, with respect to enterprise scale,promotion opportunity
      and inter personal relationship cultivation,the amounts account for only 22%, 18% and 8% respectively.

      What exactly contributes to this phenomenon? Reasons can be listed as follows: Previously,
      with the accelerating pace of the economy and society, price of commodities are witnessing considerable climb increasingly,
      especially in the metropolitan cities. As a result,graduates need handsome income to sustain their life.
      What’s more,the generous welfare can further secure the quality of life and enable the graduates to fully enjoy their new starting point.
      Consequently,nearly half of the graduates are inclined to view salary and welfare as the prior option in their pursuit of work.

      What have been discussed above, I firmly believe that such established trend will definitely continue in the forth coming years.
      Accordingly,it is advisable for those enterprises that aspire to recruit qualified applicants to take this into consideration.
    </div>
    As is clearly revealed from the chart, the number of world’s population beyond 60 has experienced great changes during the period from 1980 to 2010.
    To be concrete, there were over 600 million all over the world in 2010, while the number of China went up to 132 million in the same year,
    accounting for 10.6% of the total population. Apparently, what is behind the increase deserves our careful analysis.

    The graph reflects an extremely grave scenario: the aging populations rocketing all over the world.
    This phenomenon may bring about a wide spectrum of problems, socially and economically.For one thing,
    an increasingly massive number of the old people will greatly cause the imbalance of social population fabric.
    In addition, the society will be overwhelmed with more elder people and they need to gain support from the youngsters as well as from the whole society.
    Therefore, the country at large will be loaded with substantial pressures, and the society will teeter at the verge of instability.
    Last but not least, a lack of adequate labors and talents will also brought chaos on the economic development.
    Hence the economic growth of the whole country will be dragged and even paralyzed.

    Given the severity of current situation in terms of the aging population in China and the world at large,
    some practical counter measures should be instantly drafted and thoroughly implemented. To begin with,
    governments of all levels should ease the intensity over its birth control and promote the population fabric.
    What’s more, a more encompassing social welfare mechanisms expected to formulate so as to assure old people a carefree twilight years.
    Over all, with an effective solution, the catastrophic consequences brought by the aging population will certainly be eluded.
    <div class="myrank">
      <div class="rank-head">
        <span class="ml10">排行榜</span>
        <span class="mr10">分享量 积分</span>
      </div>
      <div class="rank-content">
        <ul class="rank-ul" style="overflow:auto">
          <li v-for="i in 8" class="rank-li">
            <span class="span1">{{i}}</span>
            <el-tag>标签一</el-tag>
            <el-avatar class="span2" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span class="span3">543535</span>
            <span class="span4">35355</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rank',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .myrank{
    width: 300px;
    border:1px solid gray;
  }
  .rank-head{
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background:#009966 ;
    color: white;
  }
  .rank-li{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .rank-li .span1{
  }
  .rank-li .span2{
  }
  .rank-li .span3{
  }
  .rank-li .span4{
    margin-left: 30px;
  }
</style>
