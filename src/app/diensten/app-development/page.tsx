import Image from 'next/image'
import React from 'react'
import { Card } from './components/card'
import { Button } from './components/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/accordion'
import { SectioFourWaveUp, SectionOneVector, SectionThreeVector, SectionTwoIconOne, SectionTwoIconThree, SectionTwoIconTwo } from './assets/vectors/vectors'
import Header from '@/components/shared/Header'
import Breadcrumb from './components/breadcrumb/breadcrumb'
import { SectionContainer } from './components/section-container'
import { SectionHeader } from './components/section-header'
import SectionTag from './components/section-tag'

import MunzurImage from "./assets/vectors/munzur.png";
import WesleyImage from "./assets/vectors/wesley.png";

const AppDevelopment = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <div className='animate-in slide-in-from-bottom-20 duration-500'>
                <SectionContainer className="mt-[50px] md:mt-[100px]">
                    {/* Hero Section */}
                    <section>
                        <div className=" flex flex-col justify-center xl:flex-row items-center xl:items-start  md:gap-12 ">
                            <div className='w-full flex justify-center xl:w-1/2 text-center xl:text-left'>
                                <div className=' w-[246px] h-[274px] md:w-[414.82px] md:h-[427px] xl:w-[567.24px] xl:h-[583.9px]'>

                                    <SectionOneVector />
                                </div>
                            </div>

                            <div className='w-full xl:w-1/2'>
                                <div className="space-y-4 md:space-y-8 flex flex-col items-center xl:items-start">
                                    <SectionTag className='text-center xl:text-left'>Ontwerp uw eigen</SectionTag>
                                    <SectionHeader className='text-center xl:text-left'>Uw visie, onze expertise</SectionHeader>
                                    <p className="text-gray-600 leading-relaxed max-w-[90%] text-center xl:text-left">
                                        Bij Younitech begrijpen we dat een sterke, goed ontworpen applicatie essentieel is voor succes in de
                                        moderne wereld. Of u nu een nieuwe mobiele app wilt lanceren, een webapplicatie wilt bouwen of een
                                        bestaande applicatie wilt optimaliseren - wij zorgen voor oplossingen die impact maken.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Feature Cards */}
                    <section className='mt-[50px] xl:mt-[100px]'>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px] xl:mt-[100px]">
                            <Card className="p-6 flex flex-row gap-8">
                                <SectionTwoIconOne />
                                <div>
                                    <h3 className="font-semibold mb-2">Strategie op maat</h3>
                                    <p className="text-sm text-gray-600">
                                        Wij leveren op uw unieke behoeften afgestemde en effectieve oplossing.
                                    </p>
                                </div>
                            </Card>
                            <Card className="p-6 flex flex-row gap-8">
                                <SectionTwoIconTwo />
                                <div>
                                    <h3 className="font-semibold mb-2">Innovatieve ontwerpen</h3>
                                    <p className="text-sm text-gray-600">Gebruikervriendelijke interfaces die gebruikerservaring verbeteren.</p>
                                </div>
                            </Card>
                            <Card className="p-6 flex flex-row gap-8">
                                <SectionTwoIconThree />
                                <div>
                                    <h3 className="font-semibold mb-2">Schaalbare technologie</h3>
                                    <p className="text-sm text-gray-600">Gebruik het vol bedrijf meegroeit en toekomstbestendig blijft.</p>
                                </div>
                            </Card>
                        </div>
                    </section>

                    {/* Why Choose Us Section */}
                    <section className='mt-[50px] xl:mt-[100px]'>
                        <div className="flex flex-col-reverse justify-center gap-[72px] xl:gap-[0px] xl:flex-row items-center xl:items-start">
                            <div className="flex-1 space-y-4 md:space-y-8">
                                <SectionTag>Ontwerp uw eigen</SectionTag>
                                <SectionHeader>Waarom kiezen voor Younitech?</SectionHeader>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Op maat gemaakte oplossingen</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Elke app wordt volledig afgestemd op uw specifieke eisen en doelstellingen
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">Geavanceerde technologie</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                Wij maken gebruik van moderne tools en frameworks zoals React Native, Flutter, en AWS.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-2">End-to-end Support</h3>
                                            <p className="text-gray-600 leading-relaxed">Van concept tot lancering en daarna - wij staan altijd voor u klaar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full flex justify-center xl:w-1/2 text-center xl:text-left'>
                                <div className='w-[303px] h-[226px] md:w-[496.565px] md:h-[370px] lg:w-[613.325px] lg:h-[424.985px] xl:w-[956.893px] xl:h-[663.05px]'>
                                    <SectionThreeVector />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="mt-[50px] xl:-mt-[30px]">
                        <div className="flex space-y-4 md:space-y-8 flex-col items-center ">
                            <SectionTag className='w-max'>Hoe het werkt</SectionTag>
                            <SectionHeader>Hoe wij uw idee tot leven brengen</SectionHeader>

                            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 pt-[30px]">
                                <div className="relative text-center">
                                    <div className='hidden xl:block absolute right-0 top-0 translate-x-[60%]'>
                                        <SectioFourWaveUp />
                                    </div>
                                    <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                                        1
                                    </div>
                                    <h3 className="font-semibold mb-2">Concept en Strategie</h3>
                                    <p className="text-sm text-gray-600">
                                        Wij beginnen met een uitgebreide analyse van uw behoeften en doelen.
                                    </p>
                                </div>
                                <div className="relative text-center">
                                    <div className='hidden xl:block absolute right-0 top-0 translate-x-[60%] rotate-180 origin-bottom'>
                                        <SectioFourWaveUp />
                                    </div>
                                    <div className="w-14 h-14 bg-white text-[#468AFF] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                                        2
                                    </div>
                                    <h3 className="font-semibold mb-2">Ontwikkeling en Ontwerp</h3>
                                    <p className="text-sm text-gray-600">
                                        Ons team creëert een visueel aantrekkelijk en functioneel ontwerp.
                                    </p>
                                </div>
                                <div className="relative text-center">
                                    <div className='hidden xl:block absolute right-0 top-0 translate-x-[60%]'>
                                        <SectioFourWaveUp />
                                    </div>
                                    <div className="w-14 h-14 bg-white text-[#468AFF] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                                        3
                                    </div>
                                    <h3 className="font-semibold mb-2">Testen en Optimalisatie</h3>
                                    <p className="text-sm text-gray-600">
                                        We voeren grondige tests uit om ervoor te gaan dat de applicatie perfect functioneert.
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-14 h-14 bg-white text-[#468AFF] rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.12)" }}>
                                        4
                                    </div>
                                    <h3 className="font-semibold mb-2">Implementatie en Ondersteuning</h3>
                                    <p className="text-sm text-gray-600">Na de lancering bieden wij doorlopende ondersteuning.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                </SectionContainer>
                {/* FAQ Section */}
                <section className="w-full px-4 mt-[25px] xl:mt-[70px] bg-[#F8F8F8] pt-[25px] xl:pt-[60px] pb-[60px] xl:pb-[200px]">
                    <SectionContainer className="max-w-3xl mx-auto">
                        <div className="flex flex-col justify-center gap-[72px] xl:gap-[0px] xl:flex-row items-center xl:items-start">
                            <div className='flex flex-col justify-center xl:justify-start w-full xl:w-[40%] space-y-4 xl:space-y-8'>
                                <SectionTag>Ondersteuning</SectionTag>
                                <SectionHeader className="text-2xl md:text-3xl font-bold mt-2 mb-8 text-center xl:text-left">Veelgestelde Vragen</SectionHeader>
                                <p className="text-gray-600 leading-relaxed xl:w-[60%] text-center xl:text-left">
                                    Heeft u vragen over onze brandingdiensten?
                                    <br />
                                    <br />
                                    Wij staan klaar om uw vragen te beantwoorden en u te begeleiden in het brandingproces.
                                </p>
                            </div>

                            <Accordion className='flex-1 space-y-4 xl:space-y-8' type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className='text-left'>Hoe lang duurt het om een app te ontwikkelen?</AccordionTrigger>
                                    <AccordionContent className='text-left'>
                                        De ontwikkeltijd varieert afhankelijk van de complexiteit en functionaliteit van de app.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2" className='text-left'>
                                    <AccordionTrigger className='text-left'>Wat voor soort apps ontwikkelen jullie?</AccordionTrigger>
                                    <AccordionContent className='text-left'>
                                        We ontwikkelen diverse soorten apps, van mobiele apps tot webapplicaties.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3" className='text-left'>
                                    <AccordionTrigger className='text-left'>Bieden jullie ondersteuning na de lancering?</AccordionTrigger>
                                    <AccordionContent className='text-left'>Ja, we bieden uitgebreide ondersteuning en onderhoud na de lancering.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4" className='text-left'>
                                    <AccordionTrigger className='text-left'>Hoe weet ik zeker dat mijn app uniek is?</AccordionTrigger>
                                    <AccordionContent className='text-left'>
                                        We doen uitgebreid marktonderzoek en ontwikkelen op maat gemaakte oplossingen.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </SectionContainer>
                </section>

                {/* Testimonials Section */}
                <section className=" my-[25px] xl:my-[70px]">
                    <SectionContainer className="max-w-3xl mx-auto">
                        <div className="flex flex-col justify-center gap-[72px] xl:gap-[0px] xl:flex-row items-center xl:items-start">
                            <div className="flex flex-col items-center xl:items-start space-y-4 xl:space-y-8 max-w-3xl mx-auto text-center mb-12 w-full xl:w-[40%]">
                                <SectionTag>Testimonials</SectionTag>
                                <SectionHeader className='w-[90%] text-center xl:text-left'>Wat onze klanten zeggen</SectionHeader>
                                <p className="text-gray-600 w-[90%] text-center xl:text-left">
                                    Wij ondersteunen een breed scala aan bedrijven. Geef je merk de boost die het verdient!
                                </p>
                                <Button className="mt-6 bg-[#468AFF] w-max">Book nu je offerte!</Button>
                            </div>

                            <div className="flex-1 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                                <Card className="p-6 h-full flex flex-col">
                                    <h3 className="font-semibold mb-4">Efficiënte Routeplanning met Younitech</h3>
                                    <p className="text-gray-600 mb-6">
                                        "Voorheen was routeplanning een nachtmerrie - elke ging veel tijd en energie verloren. Younitech
                                        ontwikkelde een planningssysteem dat dit ten eerste en milieuvriendelijk verdient. Mijn planner kan
                                        eindelijk rustig een kop koffie drinken zonder boos telefoontjes. Beste keuze van het jaar!"
                                    </p>
                                    <div className="flex items-end gap-4 flex-1">
                                        <Image src={MunzurImage} alt="Mohammed Munzur" width={48} height={48} className="rounded-full" />
                                        <div>
                                            <p className="font-semibold">Mohammed Munzur</p>
                                            <p className="text-sm text-gray-600">ABC Autotransport</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 h-full flex flex-col">
                                    <h3 className="font-semibold mb-4">Slimmer HR-beheer met Geautomatiseerde Processen</h3>
                                    <p className="text-gray-600 mb-6">
                                        "Ons HR-proces was chaotisch, met eindeloze vragen over documenten en startdata. Dankzij Younitech's
                                        CRM-systeem is alles geautomatiseerd, krijgen kandidaten direct updates en werkt ons team veel
                                        efficiënter. Dit bracht rust en verhoogde de productiviteit enorm!"
                                    </p>
                                    <div className="flex items-end gap-4 flex-1">
                                        <Image src={WesleyImage} alt="Wesley Groenbeek" width={48} height={48} className="rounded-full" />
                                        <div>
                                            <p className="font-semibold">Wesley Groenbeek</p>
                                            <p className="text-sm text-gray-600">Arbouw Uitzendbureau</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </SectionContainer>
                </section>
            </div>
        </>
    )
}

export default AppDevelopment
