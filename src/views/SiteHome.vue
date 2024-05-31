<template>
  <div class="container mt-4">
    <div class="row">
      <div v-for="article in articles" :key="article.id" class="col-md-4 mb-4">
        <!--- <img src="../assets/images/stop_procrastination.png" alt="Random Image" class="img-fluid rounded" />  -->
        
        <!-- Card ~ Start-->
        <div class="card" style="width:400px">
		  <router-link :to="'/' + article.articlepage" >
            <img 
              class="card-img-top rounded mx-auto d-block" 
			  :src="'images/' + article.blogimage"
              alt="{{ article.title }}" 
              style="width:288px;height:150px" 
            >
          </router-link>	
            <div class="card-body">
              <h4 class="card-title">{{ article.title }}</h4>
              <p class="card-text">{{ article.synopsis }}</p>
            <!---- 
			<router-link to="/ + {{ article.articlepage }}  " class="btn btn-primary">Read Article</router-link>   
			---->
			<!---- 
			<router-link to="'/article/'+{{article.id}}" class="btn btn-primary">Read Article</router-link>
			---->
			<!---- 
			<a :href="'/article/' + article.id" class="btn btn-primary">Read Article</a>
			---->
			<router-link :to="'/' + article.articlepage" class="btn btn-primary">Read Article</router-link>
			
            </div>
        </div>        
        <!-- Card ~ End -->

      </div>
    </div>
	<p class="container my-3">
	New blog articles added weekly.  Please check back often for more Public Speaking & Presentation tips and resources.
	</p>
  </div>
  <br />

</template>

<script setup lang="ts">
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    title: 'Public Speaking Is Nothing To Fear!' ,
    synopsis: 'Public speaking is often perceived as a daunting task, a challenge that many people would rather avoid. However, this ..',
    blogimage: 'better_speaker.png',
    articlepage: 'betterspeaking',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 2,
    title: 'My Favourite Quotes About Speeches' ,
    synopsis: 'Thought provoking quotations to ponder, and to help your next speech or presentation ..',
    blogimage: 'favourite_quotes_001.png',
    articlepage: 'quotesrespeeches',
    pubdate: '30 March 2024 10:40 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 3,
    title: 'The Four Levels of Competency' ,
    synopsis: 'Learning takes time, BUT with the right plan, we can progress faster. It helps to be aware of the Four Stages of Competence in ..',
    blogimage: 'competence_levels.png',
    articlepage: 'competencelevel',
    pubdate: '30 March 2024 09:15 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 4,
    title: 'Jack of All Trades' ,
    synopsis: 'Being an IT Specialist for many years, I have long lived in dread of a popular quote ..',
    blogimage: 'jack_of_all_trades_001.png',
    articlepage: 'jackalltrades',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 5,
    title: 'Preparing for Uncertainty in Public Speaking' ,
    synopsis: 'In a USA Department of Defense briefing on February 12, 2002, former 2 time Secretary of Defense Donald Rumsfeld ..',
    blogimage: 'unknown_unknown.png',
    articlepage: 'unknownunknowns',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },


  {
    id: 6,
    title: '12 Tips to Improve Your Public Speaking' ,
    synopsis: 'Embarking on a journey to enhance your public speaking skills is a brave and rewarding endeavor. Here are 12 tips, grounded in ..',
    blogimage: '12_tips_to_improve_speaking.png',
    articlepage: 'improve12tips',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 7,
    title: 'Happy St Patricks Day' ,
    synopsis: 'St Paddys Day is often associated with multi-culturalism, imbibing, luck, & the best of Irish culture ..',
    blogimage: 'st_patricks_day_001.png',
    articlepage: 'stpatricksday',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 8,
    title: 'Beating Glossophobia: Destroy Your Public Speaking Jitters' ,
    synopsis: 'Public speaking is a skill highly valued across many professions and academic fields. Yet, the fear of public speaking ..',
    blogimage: 'glossophobia_001.png',
    articlepage: 'glossophobia',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 9,
    title: '6 Tips To Improve Your Public Speaking Skills' ,
    synopsis: 'Every proficient speaker started off as a beginner speaker. Having persistent, a plan, good ..',
    blogimage: '6_tips_to_improve_speaking.png',
    articlepage: 'improveps',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },

  {
    id: 10,
    title: 'Exorcizing Glossophobia: Some Tips to Help' ,
    synopsis: 'Do you remember learning to walk? Probably not, yet it is a learned skill that is not inate to us ..',
    blogimage: 'glossophobia.png',
    articlepage: 'glossophobiaexorcized',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 11,
    title: 'Hansei & Kaizen for Presenters' ,
    synopsis: 'Public speaking, like any other skill, benefits greatly from continuous improvement and reflective practice ..',
    blogimage: 'kaizen.png',
    articlepage: 'hanseikaizen',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 12,
    title: 'When You Have Too Much to Do' ,
    synopsis: 'You have a to-do list that scrolls on for days. You are managing multiple projects, getting lots of email and messages ..',
    blogimage: 'much-to-do.jpg',
    articlepage: 'muchtodo',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 13,
    title: 'How to Get Better at Public Speaking' ,
    synopsis: 'Public speaking is an essential skill that can significantly impact your personal and professional life. Whether ..',
    blogimage: 'speak_confidently.png',
    articlepage: 'betterspeaking',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },

  {
    id: 14,
    title: 'How I Learned to Stop Procrastinating' ,
    synopsis: 'I have been a lifelong procrastinator, at least until recent years. I would put things off until deadline, because I knew I could ..',
    blogimage: 'stop_procrastination.png',
    articlepage: 'procrastination',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  },
  {
    id: 15,
    title: '7 Things You Should Know About Running a Small Business' ,
    synopsis: 'When you start your small business, you will quickly become aware that there are many other little, but really ..',
    blogimage: 'small-business.jpg',
    articlepage: 'smallbusiness',
    pubdate: '30 March 2024 11:10 AM' ,
    story: ['In the international bestseller', 'Thinking, Fast and Slow', 'Daniel Kahneman.']
  }
    

  // Add the rest of your articles here
])
</script>

<style scoped>
.card {
  height: 100%;
}
</style>
