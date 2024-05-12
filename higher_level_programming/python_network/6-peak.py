#!/usr/bin/python3
"""function to find the peak in an  unsorted list"""

def find_peak(list_of_integers):
    """function to determine peak"""

    data = list_of_integers
    peak = []

    for i in range(1, len(data - 1)):
        if data[i] > data[i + 1] and data[i] > data[i - 1]:
            peak.append(i)


        return (peak)
