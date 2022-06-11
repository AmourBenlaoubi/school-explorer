
export const transformData = (data) => {
    return data.records.map((ecole) => {
        return {
            name: ecole.fields.nom_etablissement,
            adress: ecole.fields.adresse_1
        }
    });
}