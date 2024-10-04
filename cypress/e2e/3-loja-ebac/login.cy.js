/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta') 
    });

    afterEach(() => {
        cy.screenshot()
        
    });

it('Deve fazer login com sucesso', () =>{
    
    cy.get('#username').type('thiago.santos@teste.com.br')
    cy.get('#password').type('080914@Tg')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.santos (não é thiago.santos? Sair)')
})

it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('thiago.@teste.com.br')
    cy.get('#password').type('080914@Tg')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
});

it('Deve exibir uma mensagem de erro ao inserir senha inválida', () =>{
    cy.get('#username').type('thiago.santos@teste.com.br')
    cy.get('#password').type('080914')
    cy.get('.woocommerce-form > .button').click()  
    cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail thiago.santos@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
})
it.('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuário)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.santos (não é thiago.santos? Sair)')
})
it.only('Deve fazer login com sucesso - Usando fixture', () => {
    cy.fixture('perfil').then(dados =>{
    cy.get('#username').type(dados.usuário, {log: false})
    cy.get('#password').type(dado.senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago.santos (não é thiago.santos? Sair)')
})

    })
})
});
})