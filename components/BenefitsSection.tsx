import React from 'react';
import type { Benefit } from '../types';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 flex-shrink-0 text-lime-volt" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const benefits: Benefit[] = [
    { title: 'Plano de Saúde Parceiro', description: 'Cuidamos do que mais importa: sua saúde e bem-estar, com acesso a uma rede credenciada de qualidade.' },
    { title: 'Cursos Profissionalizantes', description: 'Desenvolva novas habilidades e prepare-se para o mercado de trabalho com certificações reconhecidas.' },
    { title: 'Plataforma de Estudos Online', description: 'Ambiente moderno e interativo com trilhas de aprendizado, videoaulas e conteúdos atualizados.' },
    { title: 'Atendimento Psicológico', description: 'Suporte emocional e acompanhamento com psicóloga parceira, promovendo equilíbrio e saúde mental.' },
    { title: 'Reforço Escolar Personalizado', description: 'Apoio pedagógico contínuo para fortalecer a base acadêmica e garantir melhores resultados.' },
    { title: 'Acompanhamento Nutricional', description: 'Orientação com nutricionista especializada, voltada à saúde, desempenho e qualidade de vida.' },
    { title: 'Programas de Emagrecimento e Bem-Estar', description: 'Ações práticas voltadas para alunos e familiares, com foco em saúde, vitalidade e autoestima.' },
    { title: 'Descontos Exclusivos em Graduação e Pós-Graduação (Uniasselvi)', description: 'Benefício estendido aos familiares, com condições especiais para formação superior de qualidade.' },
];

const BenefitsSection: React.FC = () => {
    return (
        <section id="beneficios" className="py-20 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">🌟 Benefícios Exclusivos</h2>
                <div className="w-24 h-1 bg-lime-volt mb-12 mx-auto"></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex items-start space-x-4">
                            <CheckCircleIcon />
                            <div>
                                <h3 className="text-xl font-display text-white mb-1">{benefit.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gray-900 p-8 rounded-lg border border-lime-volt/30 max-w-4xl mx-auto shadow-2xl">
                    <h3 className="text-2xl font-display uppercase tracking-wider font-bold text-lime-volt mb-4">🎖️ Bônus Premium</h3>
                    <p className="text-lg text-gray-300">
                        Acesso ao <span className="font-bold text-white">Papiro Militar</span> + Nova <span className="font-bold text-white">Plataforma Gamificada</span>, com desafios, conquistas e recompensas que transformam o aprendizado em uma experiência empolgante e envolvente.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;
