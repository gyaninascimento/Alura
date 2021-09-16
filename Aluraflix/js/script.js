/*var filme1 = "Yesterday";
var filme2 = "A chegada";
var filme3 = "Escola de Rock";

document.write("<p>" + filme1 + "</p>")
document.write("<strong>" + filme2 + "</strong>")
document.write("<h1>" + filme3 + "</h1>")*///document.write imprime na tela, podemos estilizar normalmente como css

//LISTAS-ARRAY

var listaFilmes = ["Yesterday", "A chegada", "Escola de Rock"]

listaFilmes.push("Harry Potter")// push elemento adicionado lista

/*document.write("<p>" + listaFilmes[0] + "</p>")
document.write("<strong>" + listaFilmes[1] + "</strong>")
document.write("<h1>" + listaFilmes[2] + "</h1>")
document.write("<h3>" + listaFilmes[3] + "</h3>")*/

//para imprimir os valores do array com menos linhas de comando use o for, laço de repetição, que cria o numero de repeticoes necessarias

// valor inicial    | condição   | expressao final (variavel de iteração) 
/*for (var indice = 0; indice < 4; indice = indice + 1){
    document.write("<p>" + listaFilmes[indice] + "</p>")
}*/

/*for (var indice = 0; indice < 4; indice++){
    document.write("<p>" + listaFilmes[indice] + "</p>")
}*/

//length:(numero de elementos) enquanto o indice for mnor que o tamanho da minha lista, imprima

listaFilmes.push("Harry Potter 2")
listaFilmes.push("Harry Potter 3")
listaFilmes.push("Harry Potter 4")
listaFilmes.push("Harry Potter 5")
listaFilmes.push("Harry Potter 6")
for (var indice = 0; indice < listaFilmes.length; indice++){
    document.write("<p>" + listaFilmes[indice] + "</p>")
}
