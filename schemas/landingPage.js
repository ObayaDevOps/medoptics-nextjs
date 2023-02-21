import { HomeIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
  icon: HomeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingTop',
      title: 'Heading Top',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingMiddleHighlight',
      title: 'Heading Middle Highlight',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headingBottom',
      title: 'Heading Bottom',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'subheading',
        title: 'SubHeading',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'title',
    //     maxLength: 96,
    //     isUnique: (value, context) => context.defaultIsUnique(value, context),
    //   },
    //   validation: (rule) => rule.required(),
    // }),

    //Top Image
    defineField({
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),

      //Three Feature Bar 
      defineField({
        name: 'threeFeatureTitle1',
        title: 'Three Feature Title 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'threeFeatureText1',
        title: 'Three Feature Text 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'threeFeatureTitle2',
        title: 'Three Feature Title 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'threeFeatureText2',
        title: 'Three Feature Text 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'threeFeatureTitle3',
        title: 'Three Feature Title 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'threeFeatureText3',
        title: 'Three Feature Text 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      //Who we Are Section
      defineField({
        name: 'whoWeAreTitle',
        title: 'Who We Are Section Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whoWeAreContentParagraph1',
        title: 'Who We Are Section Paragraph 1',
        type: 'text',
      }),
      defineField({
        name: 'whoWeAreContentParagraph2',
        title: 'Who We Are Section Paragraph 2',
        type: 'text',
      }),
      defineField({
        name: 'whoWeAreContentParagraph3',
        title: 'Who We Are Section Paragraph 3',
        type: 'text',
      }),
      defineField({
        name: 'whoWeAreContentParagraph4',
        title: 'Who We Are Section Paragraph 4',
        type: 'text',
      }),
      defineField({
        name: 'whoWeAreImage',
        title: 'Who We Are Section Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),


      //Statistics Bar
      defineField({
        name: 'statBarTitle1',
        title: 'Statistics Bar Title 1',
        type: 'text',
      }),
      defineField({
        name: 'statBarContent1',
        title: 'Statistics Bar Content 1',
        type: 'text',
      }),
      defineField({
        name: 'statBarTitle2',
        title: 'Statistics Bar Title 2',
        type: 'text',
      }),
      defineField({
        name: 'statBarContent2',
        title: 'Statistics Bar Content 2',
        type: 'text',
      }),

      defineField({
        name: 'statBarTitle3',
        title: 'Statistics Bar Title 3',
        type: 'text',
      }),
      defineField({
        name: 'statBarContent3',
        title: 'Statistics Bar Content 3',
        type: 'text',
      }),
      defineField({
        name: 'statBarTitle4',
        title: 'Statistics Bar Title 4',
        type: 'text',
      }),
      defineField({
        name: 'statBarContent4',
        title: 'Statistics Bar Content 4',
        type: 'text',
      }),

      //What We Offer Section
      defineField({
        name: 'whatWeOfferHeading',
        title: 'What We Offer Section Heading',
        type: 'string',
        validation: (rule) => rule.required(),
      }),

      defineField({
        name: 'whatWeOfferTitle1',
        title: 'What We Offer Title1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeOfferImage1',
        title: 'What We Offer Image 1',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'whatWeOfferContent1',
        title: 'What We Offer Content 1',
        type: 'array',
        of: [{ type: 'block' }],
      }),

      
      defineField({
        name: 'whatWeOfferTitle2',
        title: 'What We Offer Title2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeOfferImage2',
        title: 'What We Offer Image 2',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'whatWeOfferContent2',
        title: 'What We Offer Content 2',
        type: 'array',
        of: [{ type: 'block' }],
      }),


      defineField({
        name: 'whatWeOfferTitle3',
        title: 'What We Offer Title3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whatWeOfferImage3',
        title: 'What We Offer Image 3',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'whatWeOfferContent3',
        title: 'What We Offer Content 3',
        type: 'array',
        of: [{ type: 'block' }],
      }),


      //Why Choose Us Section
      defineField({
        name: 'whyChooseUsBackgroudnTitle',
        title: 'Why Choose Us Background Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'whyChooseUsBackgroundImage3',
        title: 'Why Choose Us Background Image 3',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'whyChooseUsContent',
        title: 'Why Choose Us Content',
        type: 'array',
        of: [{ type: 'block' }],
      }),

      //Testimonials
      defineField({
        name: 'TestimonialsTitle',
        title: 'Testimonials Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'TestimonialsSubTitle',
        title: 'Testimonials Sub Title',
        type: 'string',
        validation: (rule) => rule.required(),
      }),


      defineField({
        name: 'TestimonialTitle1',
        title: 'Testimonial  Title 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'testimonialContent1',
        title: 'Testimonial Content 1',
        type: 'array',
        of: [{ type: 'block' }],
      }),
      defineField({
        name: 'testimonialImage1',
        title: 'testimonial Image 1',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'TestimonialAuthorName1',
        title: 'Testimonial Author 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'TestimonialAuthorJobTitle1',
        title: 'Testimonial Author Job Title 1',
        type: 'string',
        validation: (rule) => rule.required(),
      }),



      defineField({
        name: 'testimonialTitle2',
        title: 'Testimonial  Title 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'testimonialContent2',
        title: 'Testimonial Content 2',
        type: 'array',
        of: [{ type: 'block' }],
      }),
      defineField({
        name: 'testimonialImage2',
        title: 'testimonial Image 2',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'TestimonialAuthorName2',
        title: 'Testimonial Author 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'TestimonialAuthorJobTitle2',
        title: 'Testimonial Author Job Title 2',
        type: 'string',
        validation: (rule) => rule.required(),
      }),


      defineField({
        name: 'testimonialTitle3',
        title: 'Testimonial  Title 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'testimonialContent3',
        title: 'Testimonial Content 3',
        type: 'array',
        of: [{ type: 'block' }],
      }),
      defineField({
        name: 'testimonialImage3',
        title: 'testimonial Image 3',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'TestimonialAuthorName3',
        title: 'Testimonial Author 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'TestimonialAuthorJobTitle3',
        title: 'Testimonial Author Job Title 3',
        type: 'string',
        validation: (rule) => rule.required(),
      }),


      // Bottom Call to Action
      defineField({
        name: 'callToAction',
        title: 'Call to Action',
        type: 'string',
        validation: (rule) => rule.required(),
      }),



      

  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
