## tasks

- [x] sitemaps for all pages
- [x] make csv data accessible in graph ql (query is there: queries_example/writers-query.gql)
- [x] make basic profile template
- [x] make it clearer for humans
- [x] make listing
  - testing url: http://localhost:8000/writers/
  - [x] add query real data for listing
  - [ ] make pagination (by 10 authors) (not necessary right now, can be in the next version) https://www.gatsbyjs.com/docs/adding-pagination/
- [x] make header and footer 
- [x] make slugs in writers page and profile page 
- [x] make 'project about' page 
- [x] change slugs so it would contain name and presudoname (for profiles)
- [ ] make linking between profiles (think about that)
- [ ] need to add genre for each creator so it would be possible to filter by genre
  - [ ] maybe I should generalize? instead of writers, artists and so on..just creator? (митець?)
- [x] mobile version looks like shit
- [x] work on seo (og tags, meta and so on)
- [x] find domain name
- [x] deploy on netlify 
- [x] added to search console 
- [x] sitemaps!
- [x] artists
- [ ] all artists images should be downloaded and settled in our S3 bucket
  - https://flaviocopes.com/node-aws-s3-upload-image/
  - https://www.gatsbyjs.com/plugins/gatsby-source-s3/
  - https://www.gatsbyjs.com/docs/how-to/images-and-media/preprocessing-external-images/
- [x] gatsby image plugin should be used for images, they are slow to load
  - https://mediajams.dev/post/using-dynamic-image-in-gatsby-plugin-image
- [x] artists should have gallery with images, not just one example of their work
  - links ref:
    - https://github.com/lelouchB/next-image-gallery
  - [ ] make image section bigger, limit text section
- [x] need to make button 'back to listing' on profile
- [ ] need to add genres to the listing
- [ ] fix seo previews
- [ ] translations!!!!
- [x] make 'looking help' page 
  - [x] People with expertise in Ukrainian culture & art
    - [x] Culture researchers 
    - [x] Art researchers and crytics 
  - [x] Software Engineer (TypeScript) 
  - [x] Translator
    - [x] Chinese [Mandarin]
    - [x] German
    - [x] English
    - [x] Spanish
    - [x] Afrikaans
    - [x] Arabic
    - [x] Japanese 
    - [x] Hindi
    - [x] Vietnamese 
    - [x] French
  - [x] made data for that (storage folder)
  - [x] integrated data into graphql layer (https://www.gatsbyjs.com/plugins/gatsby-transformer-json/)
  - [x] make listing for all (http://localhost:8000/volunteers/)
  - [x] make slugs for data
  - [x] make templated page for each 
- [ ] render all issues (https://marko-py.readthedocs.io/en/latest/), publish them in github so open source community would see them 
- [x] added lists (citations and most famous pieces)

### resources

- https://www.gatsbyjs.com/docs/tutorial/part-7/
- https://chakra-ui.com/docs/components
- https://docs.google.com/spreadsheets/d/1L6uApGNTSfMfi7_bvaEV4kAM35sIVJA1PTN-LcTuVpk/edit#gid=0
- https://open.spotify.com/playlist/7qiesZR3pwTVGGqV4lVxQu?si=db096343357e4541
- sharp plugin article: https://www.digitalocean.com/community/tutorials/how-to-process-images-in-node-js-with-sharp

### weird ideas

- embed 3d model of each person in their profile page (so it would be possible to turn it on 360 degrees)
- translate to English, German, Polish, Chinese (Mandarin), Arabic, Spanish and French
