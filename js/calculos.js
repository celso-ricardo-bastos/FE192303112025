function calculoTotalCompra(quantidade, valorProduto, imposto = null) {
    const totalCompraSemImposto = quantidade * valorProduto;
    if (imposto) {
        const total = totalCompraSemImposto + totalCompraSemImposto * imposto;
        return total;
    }
    return totalCompraSemImposto;
}

