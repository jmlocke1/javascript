var app = angular.module("app", []);

app.controller("SeguroController", function($scope) {
    $scope.seguro = {
        nif: "",
        nombre: "",
        ape1: "",
        edad: undefined,
        sexo: "",
        casado: false,
        numHijos: undefined,
        embarazada: false,
        coberturas: {
            oftalmologia: false,
            dental: false,
            fecundacionInVitro: false
        },
        enfermedades: {
            corazon: false,
            estomacal: false,
            rinyones: false,
            alergia: false,
            nombreAlergia: ""
        },
        fechaCreacion: new Date()
    }
    $scope.disabledEmbarazada = function() {
        return ($scope.seguro.sexo === "" || $scope.seguro.sexo === "H")
    }
});

app.controller("PruebaController", function($scope) {
    $scope.mensaje = "Hola Mundo";
});