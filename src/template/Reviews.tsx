import { Section } from '../layout/Section'
import React from 'react'
import { websiteCopyStrings } from '../utils/websiteCopyStrings'
import { Carousel } from 'react-responsive-carousel'

type ReviewProps = {
  review: string;
  profilePicUrl: string;
  reviewer: string;
  position: string;
  organisation: string;
};

export const Review = ({
  review,
  profilePicUrl,
  reviewer,
  position,
  organisation
}: ReviewProps) => (
  <div className="flex flex-col items-center">
    <p className="w-5/12 text-gray-900 italic mb-8 font-semibold">&quot;{review}&quot;</p>
    <div className="w-20 mb-6">
      <img src={profilePicUrl} />
    </div>
    <p className="font-bold mb-3">{reviewer}</p>
    <p>{position}</p>
    <p>{organisation}</p>
  </div>
)

function Reviews () {
  return (
    <Section>
      <h2 className="text-black text-center font-bold text-4xl mb-20">
        {websiteCopyStrings.reviewsHeaderPart1}{' '}
        <span className="text-primary-500">{websiteCopyStrings.reviewsHeaderPart2}</span>
      </h2>
      <Carousel showIndicators={false} showStatus={false}>
        <Review
          review={websiteCopyStrings.reviewsReview1}
          profilePicUrl="/assets/images/reviewer1.png"
          reviewer={websiteCopyStrings.reviewsReview1Reviewer}
          position={websiteCopyStrings.reviewsReview1Position}
          organisation={websiteCopyStrings.reviewsReview1Organisation}
        />
        <Review
          review={websiteCopyStrings.reviewsReview1}
          profilePicUrl="/assets/images/reviewer1.png"
          reviewer={websiteCopyStrings.reviewsReview1Reviewer}
          position={websiteCopyStrings.reviewsReview1Position}
          organisation={websiteCopyStrings.reviewsReview1Organisation}
        />
        <Review
          review={websiteCopyStrings.reviewsReview1}
          profilePicUrl="/assets/images/reviewer1.png"
          reviewer={websiteCopyStrings.reviewsReview1Reviewer}
          position={websiteCopyStrings.reviewsReview1Position}
          organisation={websiteCopyStrings.reviewsReview1Organisation}
        />
      </Carousel>
    </Section>
  )
}

export default Reviews
