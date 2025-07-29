'use client';

import { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Car,
  CheckCircle,
  Shield,
  Smartphone,
  Building,
  MessageCircle,
} from 'lucide-react';
import Navbar from './components/Navbar';
import api from './utils/backend';
import FeeCalculator from './components/FeeCalculator';
import Footer from './components/Footer';

export default function DefensiveDrivingSchool() {
  const [courts, setCourts] = useState([]);
  const [loading, setLoading] = useState(true); // 1. Add loading state

  useEffect(() => {
    setLoading(true); // Start loading
    api
      .get('/arizona/courts/')
      .then((res) => {
        console.log('API courts response:', res.data);
        setCourts(res.data);
        setLoading(false); // End loading
      })
      .catch(() => {
        setLoading(false); // End loading even if error
      });
  }, []);
  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className='bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-5xl font-bold mb-6'>
                The Best Defensive Driving School in Arizona
              </h2>
              <p className='text-xl mb-8 text-blue-100'>
                Our online and classroom offerings provide you with the
                defensive driving education that you need with the flexibility
                that you want.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12'>
                <a
                  href='https://lms.ntsi.com/registration/NiSE-AZOL-445'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl'>
                    Start Online Course
                  </button>
                </a>
                <a
                  href='https://lms.ntsi.com/registration/NiSE-AZCR-EN'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <button className='border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors bg-white'>
                    Find Classroom
                  </button>
                </a>
              </div>
            </div>
            <div className='relative '>
              <div className='p-6'>
                {loading ? (
                  // 2. Loader UI
                  <div className='flex justify-center items-center h-64'>
                    <svg
                      className='animate-spin h-10 w-10 text-blue-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'>
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8v8z'></path>
                    </svg>
                    <span className='ml-4 text-blue-600 font-semibold text-lg'>
                      Loading...
                    </span>
                  </div>
                ) : (
                  // 3. Render the card only when not loading
                  <FeeCalculator courts={courts} loading={loading} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section className='bg-teal-500 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h3 className='text-2xl font-bold mb-2'>
              Traffic and hassle free, save time on our online course for only
              $35!
            </h3>
            <p className='text-teal-100'>Get the job done!</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Award className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                We take the hassle out of the tedious, time consuming learning.
              </h3>
              <p className='text-gray-600'>
                Our online course is convenient and can be taken from anywhere.
                You can complete the course at your own pace and on your own
                schedule. The course is available 24/7 and you can start
                immediately.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Clock className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                Whether you prefer learning in a classroom setting or online
                that will work for you.
              </h3>
              <p className='text-gray-600'>
                We offer both online and classroom courses to fit your schedule
                and learning preferences. Our experienced instructors provide
                comprehensive defensive driving education.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <CheckCircle className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                Have a certificate!
              </h3>
              <p className='text-gray-600'>
                Our friendly customer service is on standby to help you with any
                questions or concerns you may have about the course.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Smartphone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                Completely mobile compatible
              </h3>
              <p className='text-gray-600'>
                Our online class is compatible with all mobile devices including
                smartphones and tablets. You can take the course on any device
                with an internet connection.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                Call or email for support
              </h3>
              <p className='text-gray-600'>
                Phone: 623-252-0964 or Email: info@azdefensivedriving.com
                Mon-Fri 8:00 AM to 5:00 PM, Saturday 9:00 AM to 1:00 PM
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Building className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-3 text-black'>
                Easy and secure!
              </h3>
              <p className='text-gray-600'>
                Our secure, SSL encrypted website ensures your personal
                information is protected. Easy online payment and immediate
                course access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Information */}
      <section id='information' className='py-20 bg-gray-100'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <h2 className='text-3xl font-bold text-center mb-8 text-black'>
              COURSE INFORMATION
            </h2>
            <div className='space-y-4 text-gray-700'>
              <p>
                Arizona gives you the opportunity to avoid paying your ticket
                and having the points appear on your Motor Vehicle Record (MVR)
                for certain violations. The Administrative Office of the Courts
                (AOC) requires the following:
              </p>

              <ul className='space-y-3 ml-6'>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    The course may only be completed once every 12 months from
                    the date of your last violation.
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>A State Fee of $24 and State Surcharge of $45 .</span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    A copy of your citation and your license (or other,
                    government-issued identification) is required to complete
                    the course.
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    The course must be completed at least 7 days before your
                    court deadline date.
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    Commercial Driver License holders are eligible only if they
                    received their ticket at 09/01/2019 while driving a
                    non-commercial vehicle for non-commercial purposes.
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    For more information, please contact the AOC at (888)
                    334-5565, email them at ddrive@courts.az.gov, or visit their
                    website.
                  </span>
                </li>

                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    For classroom courses, we charge a $15 door fee when making
                    your payment the day of the class. This fee is waived when
                    you prepay at the very latest the day before the class. Save
                    money by calling us today at 623.231.2599.
                  </span>
                </li>
                <li className='flex items-start space-x-2'>
                  <CheckCircle className='w-5 h-5 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>
                    We reserve the right to charge a $15 processing fee when
                    returning funds to the card you use to purchase this course.
                  </span>
                </li>
              </ul>
              <p>
                By completing this course, those who have received eligible
                moving violations will have the citations dismissed with no
                repercussions on your driving record.
              </p>
              <p>* – Plus state and court fees.</p>
              <p>
                ** – The course must be completed at least 7 days before your
                court deadline date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-12 text-black'>
            CONTACT US
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Phone className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-black'>CALL US</h3>
              <p className='text-gray-600'>623-231-2599</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Mail className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-black'>
                EMAIL US
              </h3>
              <p className='text-gray-600'>support@nise.co</p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                <MessageCircle className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-xl font-semibold mb-2 text-black'>TEXT US</h3>
              <p className='text-gray-600'>480-999-4396</p>
            </div>
          </div>
        </div>
      </section>

      {/* Affirmation Section */}
      <section id='eligibility' className='py-20 bg-gray-800 text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            AFFIRMATION OF ELIGIBILITY
          </h2>
          <div className='space-y-4 text-gray-300 text-sm leading-relaxed'>
            <p>
              Affirmation of Eligibility: By Registering for this course, I
              affirm that I am eligible to attend a defensive driving course for
              citation dismissal. I understand that “eligibility” means:
            </p>
            <ul className='space-y-3 ml-6'>
              <li>
                1. I have not attended a defensive driving class for any Arizona
                citation within 12 months of the date of the citation for which
                I am now attending. My traffic violation did not result in a
                collision that killed or seriously injured any person (serious
                injury defined in ARS 13-105.34).
              </li>
              <li>
                2. I am not currently registered for nor do I plan to attend any
                other defensive driving course for citation dismissal until such
                a time as I am again eligible.
              </li>
              <li>
                3. I do not possess a Commercial Driver License or, if I do, I
                was not driving a commercial vehicle at the time of my ticket
                nor was I driving this vehicle for commercial purposes.
              </li>
              <li>
                4. I was not cited for a criminal speeding ticket (21 or more
                miles over the speed limit).
              </li>
              <li>5. I did not receive a DPS photo ticket</li>
              <li>
                6. I was not cited for a violation which occurred while
                operating a commercial motor vehicle that requires a commercial
                driver license
              </li>
            </ul>
            <p>
              I understand it is solely my responsibility to affirm my
              eligibility. Learn and Go Traffic School has performed an
              eligibility check as a courtesy to me; however, the results of the
              check are not absolute. If I am later found ineligible to attend
              for this citation, the court will not dismiss the citation and all
              fees paid to attend may not be returned. I understand that by
              attending defensive driving school for this citation and having
              the citation dismissed, I am giving up my right to challenge the
              citation and will be ineligible to attend defensive driving school
              to have future citations dismissed for 12 months. I understand
              this dismissal applies to ONLY ONE citation. If I have multiple
              citations, or I am found ineligible to attend for this citation, I
              will resolve those citations with the court of jurisdiction.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center mt-12'>
            <a
              href='https://lms.ntsi.com/registration/NiSE-AZCR-EN'
              target='_blank'
              rel='noopener noreferrer'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
                FOR CLASSROOM CLICK HERE
              </button>
            </a>
            <a
              href='https://lms.ntsi.com/registration/NiSE-AZOL-445'
              target='_blank'
              rel='noopener noreferrer'>
              <button className='bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors'>
                START ONLINE CLASS NOW
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
