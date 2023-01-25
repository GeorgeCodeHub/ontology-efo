import requests


def get_efo_terms(page_number):

    # EFO data
    url = f"https://www.ebi.ac.uk/ols/api/ontologies/efo/terms?size=50&page={int(page_number)}"
    response = requests.get(url)
    data = response.json()

    return data
