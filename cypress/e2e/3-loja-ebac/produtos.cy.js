/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
   
    it.('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutosLista('Aether Gym Pant')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it.('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it.only('Deve visitar a página do produtos', () => {
        produtosPage.visitarProduto('Apollo-Running-Short')
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});