import React  from 'react';
import { AcSection, AcWrapper, Container, AcContent, IconAward, IconBuild, IconCrown, IconHappy } from './Acheivements.style';

const Achievements = () => {
  return (
    <AcSection>
      <Container>
        <AcWrapper>
          <h2>Our Achievements</h2>
          <AcContent>
            <div>
              <div>
                <IconCrown />
              </div>
              <p>20</p>
              <h6>Years Of Experience</h6>
            </div>
            <div>
              <div>
                <IconAward />
              </div>
              <p>22</p>
              <h6>Projects</h6>
            </div>
            <div>
              <div>
                <IconBuild />
              </div>
              <p>332</p>
              <h6>Developed</h6>
            </div>
            <div>
              <div>
                <IconHappy />
              </div>
              <p>234,344</p>
              <h6>Happy Family</h6>
            </div>
          </AcContent>
        </AcWrapper>
      </Container>
    </AcSection>
  )
}

export default Achievements;
