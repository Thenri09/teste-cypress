class ProdutosPage {

    visitarUrl() {
        cy.visit('produtos')
    }

buscarProdutos(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()
}

buscarProdutosLista(nomeProduto) {
    cy.get('.product-block')
    .contains(nomeProduto)
    .click()

}

visitarProduto(nomeProduto) {
    //cy.visit(`produtos/${nomeProduto}`,

    const urlFormatada = nomeProduto.replace(/
        /g, '-')
        cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.buton-variable-item-' + tamanho).click
        cy.get(`.buton-variable-item-${cor}`).click
        cy.get('.imput-text').clear().type(quantidade)
        cy.get('.sinlge_add_to_cart_button').click()


    }

}

export default new ProdutosPage()